import { useLocation, useNavigate } from 'react-router-dom';
import { CalendarIcon, HeartIcon, HomeIcon, UserIcon } from '../icons/Icons';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky bottom-0 z-50 mt-auto flex h-16 items-center justify-center bg-white">
      <div className="flex w-[100%] items-center justify-evenly space-x-4 bg-inherit">
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer flex-col items-center justify-center px-2">
          <div className="flex justify-center">
            <HomeIcon fill={isActive('/') ? 'currentColor' : 'none'} />
          </div>
          <p className="caption1 mt-[3px] pr-[1px] text-center">홈</p>
        </div>
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer flex-col items-center justify-center px-2">
          <CalendarIcon />
          <p className="caption1 mt-[5px] text-center text-xs/[11px]">일정</p>
        </div>
        <div
          onClick={() => navigate('/wishList')}
          className="cursor-pointer flex-col items-center justify-center px-2">
          <div className="flex justify-center">
            <HeartIcon fill={isActive('/wishList') ? 'currentColor' : 'none'} />
          </div>
          <p className="caption1 mt-[4px] text-center text-xs/[11px]">찜</p>
        </div>
        <div
          onClick={() => navigate('/login')}
          className="cursor-pointer flex-col items-center justify-center px-1">
          <div className="flex justify-center">
            <UserIcon />
          </div>
          <p className="caption1 mt-[3px] text-center ">내정보</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
