import {useNavigate} from 'react-router';
import Button from '../../ui/Button';
import Input from '../../ui/Input';

const LoginForm = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    navigate('/home');
  };
  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col justify-evenly h-full items-center gap-2"
    >
      <Input
        type="text"
        placeholder="USERNAME..."
        className="w-full !p-2 placeholder-gray-500 bg-white text-base border-0 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
      <Input
        type="password"
        placeholder="PASSWORD..."
        className="w-full !p-2 bg-white text-base border-0 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
      />
      <div className="flex items-center gap-2 mt-2">
        <Input type="checkbox" />
        <span className="text-white text-xs cursor-pointer font-semibold">
          REMEMBER ME
        </span>
      </div>
      <Button
        name="Enter"
        type="submit"
        className="w-20 !py-1 !bg-blue-500 cursor-pointer text-white rounded-md"
      />
      <p className="text-white text-sm font-semibold">sales[at]vegas-x.net</p>
      <p className="text-white text-sm mt-5 font-semibold">Forgot password?</p>
    </form>
  );
};

export default LoginForm;
