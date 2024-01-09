import { Link } from 'react-router-dom';

const SignupSuccess = () => {
  return (
    <>
      <div>회원가입 성공 페이지</div>
      <Link to="/signup/survey">다음</Link>
    </>
  );
};

export default SignupSuccess;
