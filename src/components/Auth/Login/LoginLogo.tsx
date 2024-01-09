import { LogoIcon } from '@components/common/icons/Icons';

const LoginLogo = () => {
  return (
    <div className="mb-16 mt-14 flex flex-col items-center">
      <div className="mb-2">
        <LogoIcon />
      </div>
      <h1 className="body6 text-gray4">위플랜플랜즈에 오신 것을 환영합니다.</h1>
    </div>
  );
};

export default LoginLogo;
