import {useNavigate} from 'react-router';
import Image from '../ui/Image';

const Helper = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute -bottom-7 right-[12%] -translate-x-1/2 h-[12vh] flex items-center space-x-4">
      <div className="relative cursor-pointer" onClick={() => navigate('/')}>
        <Image src="/botbutton_main.png" alt="botbutton" className="h-24" />
        <p className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-3xl">
          LOGOUT
        </p>
      </div>
      <div className="relative">
        <Image src="/botbutton_main.png" alt="botbutton" className="h-24" />
        <p className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-3xl">
          HELP
        </p>
      </div>
    </div>
  );
};

export default Helper;
