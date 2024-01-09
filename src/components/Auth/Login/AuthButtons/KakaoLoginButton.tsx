import { KakaoIcon } from '@components/common/icons/Icons';

const KakaoLoginButton = () => {
  const VITE_KAKAO_LOGIN_TEST_API_KEY = import.meta.env
    .VITE_KAKAO_LOGIN_TEST_API_KEY;
  const REDIRECT_URI = `${window.location.href}/kakao`;
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_LOGIN_TEST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <a
      href={KAKAO_LOGIN_URL}
      className="body3 mb-2 flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#fee304] p-2 text-['#3B1E1E']">
      <KakaoIcon />
      카카오로 로그인
    </a>
  );
};

export default KakaoLoginButton;
