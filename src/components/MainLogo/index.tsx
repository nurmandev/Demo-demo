import Image from '../ui/Image';

const MainLogo = () => {
  return (
    <div className="w-full hidden lg:flex justify-center relative">
      <div className="h-40">
        <Image src="/logo 2.png" alt="logo" className="w-full h-full" />
      </div>
      <div className="absolute translate-y-1/2 right-3 h-20 w-32">
        <Image src="/dailybox.png" alt="dailybox" className="w-full h-full" />
      </div>
      <div className="absolute translate-y-11/12 right-5 h-15 w-28">
        <Image
          src="/goldbonusbg.png"
          alt="goldbonus"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default MainLogo;
