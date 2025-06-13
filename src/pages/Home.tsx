import {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import GameSlider from '../components/GameSlider';
import GamesList from '../components/GamesList';
import MainLogo from '../components/MainLogo';
import Image from '../components/ui/Image';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState<boolean>(true);
  const [isNewsVisible, setIsNewsVisible] = useState<boolean>(true);
  const [count, setCount] = useState<number>(100); // Countdown timer
  const [changeLayout, setChangeLayout] = useState<boolean>(false);

  useEffect(() => {
    if (isLoaderVisible) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsLoaderVisible(false); // Hide loader when countdown finishes
            return 0;
          }
          return prev - 1;
        });
      }, 1);
      return () => clearInterval(timer);
    }
  }, [isLoaderVisible]);

  useEffect(() => {
    if (selectedCategory) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }
  }, [selectedCategory]);

  return isLoaderVisible ? (
    // Loader Screen
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-fuchsia-800 ">
      <div className="flex justify-center items-center gap-2">
        <p className="text-white text-5xl font-bold">Loading...</p>
        <p className="mt-20 text-white text-5xl font-bold">{count}%</p>
      </div>
      <img
        src="/preloader.png" // Change this to your actual image
        alt="Loading"
        className=" bottom-10 w-40 h-40 animate-spin"
      />
    </div>
  ) : isNewsVisible ? (
    <div className="w-screen h-screen">
      <Image src="/news.png" alt="News" className="h-full w-full relative" />
      <span
        onClick={() => setIsNewsVisible((prev) => !prev)}
        className="absolute top-5 right-8 text-lg font-bold text-black cursor-pointer"
      >
        X
      </span>
    </div>
  ) : (
    <div className="relative bg-[url('/bg.jpg')] bg-no-repeat bg-center h-screen flex flex-col">
      {/* Animated Category Overlay */}
      <div
        className={`fixed inset-0 flex items-center justify-center transition-all duration-600 ${
          isVisible
            ? 'z-50 opacity-80 scale-100 bg-black bg-opacity-70 blur-none'
            : '-z-1 opacity-0 scale-99 blur-sm'
        }`}
      >
        <p className="text-amber-400 text-9xl capitalize font-extrabold">
          {selectedCategory}
        </p>
      </div>

      {/* Main Content */}
      <GameSlider setSelectedCategory={setSelectedCategory} />
      <div className="flex flex-col justify-evenly h-[70vh] lg:h-auto !mt-2">
        <MainLogo />
        <GamesList
          selectedCategory={selectedCategory}
          changeLayout={changeLayout}
        />
      </div>
      <div className="fixed bottom-0">
        <Footer setChangeLayout={setChangeLayout} />
      </div>
    </div>
  );
};

export default Home;
