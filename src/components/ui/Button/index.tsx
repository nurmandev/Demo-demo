interface ButtonProps {
  name: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  className: string;
}
const Button = ({name, type, className}: ButtonProps) => {
  return (
    <button className={className} type={type}>
      {name}
    </button>
  );
};

export default Button;
