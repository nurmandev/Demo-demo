import Image from '../ui/Image';
import Profile from '../Profile';
import Transaction from '../Transaction';
import Information from '../Information';
import Helper from '../Helper';
import MobileSizeHelper from '../Helper/mobileSizeIndex';
import MobileSizeProfile from '../Profile/mobileSizeIndex';
import MobileSizeTransaction from '../Transaction/mobileSizeIndex';
import {Dispatch, SetStateAction} from 'react';

interface FooterProps {
  setChangeLayout: Dispatch<SetStateAction<boolean>>;
}
const Footer = ({setChangeLayout}: FooterProps) => {
  return (
    <div className="relative w-full h-[5rem] lg:h-[7.79rem]">
      <div className="hidden lg:block">
        <Transaction setChangeLayout={setChangeLayout} />
        <Profile />
        <Image src="/navbar.png" alt="navbar" />
        <Information />
        <Helper />
      </div>
      <div className="h-full bg-[#571BA0] w-screen !p-1 ">
        <MobileSizeHelper />
        <div className="flex justify-between">
          <MobileSizeTransaction />
          <MobileSizeProfile />
        </div>
      </div>
    </div>
  );
};

export default Footer;
