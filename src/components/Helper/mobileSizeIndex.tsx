import {useNavigate} from 'react-router';
import Image from '../ui/Image';

const MobileSizeHelper = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between w-full relative mx-10">
      <div className="flex space-x-4">
        <div className="relative cursor-pointer" onClick={() => navigate('/')}>
          <Image
            src="/botbutton_main.png"
            alt="botbutton"
            className="h-10 w-15"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
            LOGOUT
          </p>
        </div>
        <div className="relative">
          <Image
            src="/botbutton_main.png"
            alt="botbutton"
            className="h-10 w-15"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
            HELP
          </p>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 h-8 w-8">
        <Image src="/en.png" alt="language" className="h-full w-full" />
      </div>
      <div className="relative cursor-pointer" onClick={() => navigate('/')}>
        <Image
          src="/botbutton_main.png"
          alt="botbutton"
          className="h-10 w-15"
        />
        <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
          Find...
        </p>
      </div>
    </div>
  );
};

export default MobileSizeHelper;
