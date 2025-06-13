import {Game} from '../../types/game';
import Image from '../ui/Image';

interface GameViewProps {
  game: Game;
}

const GameView = ({game}: GameViewProps) => {
  return (
    <div className="relative flex justify-center items-center cursor-pointer">
      <div className="w-72 h-40">
        <Image
          src={game.path}
          className="w-full h-full rounded-lg"
          alt={`Game ${game.id}`}
        />
      </div>
      <div className="w-full h-full absolute">
        <Image
          src="/frame 2.png"
          className=" w-full h-full rounded-lg"
          alt="Frame"
        />
      </div>
    </div>
  );
};

export default GameView;
