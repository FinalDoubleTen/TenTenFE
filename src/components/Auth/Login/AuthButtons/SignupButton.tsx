import SubmitBtn from '@components/common/button/SubmitBtn';
import { useNavigate } from 'react-router-dom';

const SignupButton = () => {
  const navigation = useNavigate();
  const onSignupClick = () => {
    navigation('/signup');
  };
  return (
    <SubmitBtn outline type="button" onClick={onSignupClick}>
      회원가입
    </SubmitBtn>
  );
};

export default SignupButton;
