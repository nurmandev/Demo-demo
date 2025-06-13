import Slider from 'react-slick';
import {sliderList} from '../../constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../ui/Image';
import GameSliderArrow from '../GameSliderArrow';
import {Dispatch, SetStateAction} from 'react';

interface GameSliderProps {
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const GameSlider = ({setSelectedCategory}: GameSliderProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: (
      <GameSliderArrow
        src="/catarrowright.png"
        orientation="right"
        customClass="right-0 h-24 w-12 lg:w-auto"
      />
    ),
    prevArrow: (
      <GameSliderArrow
        src="/catarrowleft.png"
        orientation="left"
        customClass="left-0 h-24 w-12 lg:w-auto"
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="w-full h-24 relative">
      {sliderList.map((game) => (
        <div
          key={game.id}
          className="bg-[url('/botbutton_main.png')] h-24 !py-1 bg-center border border-left border-blue-900"
          onClick={() => setSelectedCategory(game.name)}
        >
          <Image
            src={game.path}
            alt={`Game ${game.id}`}
            className="w-full h-full"
          />
        </div>
      ))}
    </Slider>
  );
};

export default GameSlider;
