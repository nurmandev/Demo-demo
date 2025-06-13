import Image from '../ui/Image';

type Icon = {
  path: string;
  customClass: string;
};

interface ExtraProps {
  customClass: string;
  icons: Icon[];
}
const Extra = ({customClass, icons}: ExtraProps) => {
  return (
    <div
      className={`absolute bottom-9 hidden lg:flex flex-col gap-4 items-center ${customClass}`}
    >
      {icons.map((icon) => (
        <div key={icon.path} className={icon.customClass}>
          <Image src={icon.path} alt="Extra-icon" className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default Extra;
