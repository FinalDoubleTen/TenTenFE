import KakaoLoginButton from './KakaoLoginButton';
import SignupButton from './SignupButton';

const AuthButtonsWrapper = () => {
  return (
    <div>
      <div className="body6 mb-5 flex h-4 items-center gap-4 text-gray4">
        <hr className="flex-auto" />
        또는
        <hr className="flex-auto" />
      </div>
      <KakaoLoginButton />
      <SignupButton />
    </div>
  );
};

export default AuthButtonsWrapper;
