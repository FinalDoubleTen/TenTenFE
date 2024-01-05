import { Header } from '@components/common/header';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="mx-auto my-0 flex min-h-[100vh] max-w-[412px] flex-col bg-white ">
      <Header />
      <div className="px-[20px] py-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
