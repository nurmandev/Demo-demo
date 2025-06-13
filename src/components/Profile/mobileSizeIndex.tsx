import Image from '../ui/Image';

const MobileSizeProfile = () => {
  return (
    <div className="relative">
      <Image src="/lvl_bg.png" alt="lvl" className="w-32 h-8 relative" />
      <Image
        src="/lvl_progress.png"
        alt="progress"
        className="w-5 h-7 absolute top-0.5 bottom-0.5 left-0.5"
      />
      <p className="text-xl absolute top-0.5 left-10 text-yellow-500 font-extrabold">
        Kobi
      </p>
      <p className="text-2xl absolute top-0 right-0.5 text-blue-500 font-bold">
        3
      </p>
    </div>
  );
};

export default MobileSizeProfile;
