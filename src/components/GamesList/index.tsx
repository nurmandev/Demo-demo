import {usePagination} from 'react-use-pagination';
import {gamesList} from '../../constants';
import GameView from '../GameView';
import PaginationControl from '../PaginationControl';
import GameNavigationArrows from '../GameNavigationArrows';
import Extra from '../Extra';
import {Game} from '../../types/game';

interface GamesListProps {
  selectedCategory: string;
  changeLayout: boolean;
}

const GamesList = ({selectedCategory, changeLayout}: GamesListProps) => {
  const itemsPerPage = 15;
  const totalItems = gamesList.length;
  const {currentPage, setNextPage, setPreviousPage, previousEnabled} =
    usePagination({
      totalItems,
    });
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const leftIcons = [
    {path: '/myjp_icon.png', customClass: 'w-32 h-32'},
    {path: '/music_off.png', customClass: 'w-20 h-20'},
  ];
  const rightIcons = [
    {path: '/favorites.png', customClass: 'w-20 h-20'},
    {path: '/gear_normal.png', customClass: 'w-20 h-20'},
  ];
  const filteredGames = selectedCategory
    ? gamesList.filter((game) => game.name === selectedCategory)
    : gamesList;

  const paginatedGames = filteredGames.slice(startIndex, endIndex);
  const renderGame = (game: Game) => <GameView game={game} key={game.id} />;

  return (
    <div className="flex flex-col lg:justify-center items-center gap-4 relative overflow-y-scroll h-full lg:h-auto lg:overflow-hidden">
      <GameNavigationArrows
        previousEnabled={previousEnabled}
        setNextPage={setNextPage}
        setPreviousPage={setPreviousPage}
        currentPage={currentPage}
        totalPages={totalPages}
        changeLayout={changeLayout}
      >
        {paginatedGames.map(renderGame)}
      </GameNavigationArrows>
      {paginatedGames.length >= 15 && (
        <>
          <Extra customClass="left-0" icons={leftIcons} />
          <Extra customClass="right-4" icons={rightIcons} />
          <PaginationControl
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
};

export default GamesList;
