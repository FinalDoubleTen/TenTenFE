import { Header } from '@components/common/header';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from '@components/common/nav';
import { InputComment } from '@components/common/nav';

const MainLayout = () => {
  const location = useLocation();
  const hideNavPaths = [
    '/signup',
    '/login',
    '/search',
    '/detail',
    '/reviewPosting',
    '/reviewComment',
  ];
  const showNav = !hideNavPaths.some((path) =>
    location.pathname.includes(path),
  );

  return (
    <div className="mx-auto min-h-screen max-w-[412px] bg-white">
      <Header />
      <div className="px-5">
        <Outlet />
      </div>
      {showNav && <Nav />}
      {location.pathname.includes('/reviewComment') && <InputComment />}
    </div>
  );
};

export default MainLayout;
