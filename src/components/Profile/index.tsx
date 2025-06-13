import Image from '../ui/Image';

const Profile = () => {
  return (
    <div className="absolute right-12 translate-y-4 top-0 z-100 flex flex-col gap-5">
      <div>
        <Image src="/lvl_bg.png" alt="lvl" className="w-60 h-10 relative" />
        <Image
          src="/lvl_progress.png"
          alt="progress"
          className="w-10 h-9 absolute top-0.5 bottom-0.5 left-0.5"
        />
        <p className="text-xl absolute top-1.5 left-21 text-yellow-500 font-extrabold">
          Kobi
        </p>
        <p className="text-2xl absolute top-1 right-2.5 text-blue-500 font-extrabold">
          3
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <p className="text-3xl font-extrabold text-yellow-500">20:21</p>\
        <p className="text-3xl font-extrabold text-white">Find...</p>
      </div>
    </div>
  );
};

export default Profile;
