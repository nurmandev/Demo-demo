interface InputProps {
  name?: string;
  className?: string;
  type: 'text' | 'number' | 'password' | 'checkbox';
  placeholder?: string;
}
const Input = ({name, className, type, placeholder}: InputProps) => {
  return (
    <input
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
