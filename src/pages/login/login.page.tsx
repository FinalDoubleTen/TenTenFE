import BackBox from '@components/common/BackBox/BackBox';
import {
  AuthButtonsWrapper,
  LoginForm,
  LoginLogo,
} from '@components/Auth/Login';

const Login = () => {
  return (
    <div className="flex h-[93vh] flex-col justify-between">
      <div>
        <BackBox />
        <LoginLogo />
        <LoginForm />
      </div>
      <AuthButtonsWrapper />
    </div>
  );
};

export default Login;
