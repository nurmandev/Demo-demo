import LoginForm from '../components/forms/Login';
import Image from '../components/ui/Image';

const Login = () => {
  return (
    <div className='flex flex-col min-h-screen bg-[url("/vegas-x2.jpg")] bg-cover w-screen relative bg-center'>
      <div className="flex flex-col lg:flex-row !mt-19 gap-4">
        <div className="w-full lg:w-[49%]">
          <div className="float-right">
            <Image src="/vegas-logo.png" alt="logo" className="w-[540px]" />
          </div>
        </div>
        <div className="hidden lg:block lg:w-[11%]" />
        <div className="w-full lg:w-[30%] flex items-center justify-center">
          <div className="max-w-md w-[350px] !p-5 !px-7 rounded-2xl bg-[#8095BF] h-[87%] opacity-90 ">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
