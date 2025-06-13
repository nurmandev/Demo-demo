import Image from '../ui/Image';

const Information = () => {
  return (
    <>
      <div className="h-28 absolute bottom-0 left-[37%]">
        <Image
          src="/wager_box.png"
          alt="wager_box"
          className="-translate-x-1/2 h-full"
        />
      </div>
      <p className="absolute -bottom-5 left-[38%] -translate-x-1/2 h-[12vh] w-[25rem] text-white text-lg font-semibold">
        BALANCE 12023 CHARGEABLE BALANCE 5995 WAGER GOOD CASHBACK BONUS 1560
        DAILY BONUS 28
      </p>
    </>
  );
};

export default Information;
