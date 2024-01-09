import { useEffect } from 'react';

const LoginKakao = () => {
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    console.log(code);
    try {
      // const res = postKakaoLogin();
    } catch (err) {
      console.log('카카오 로그인 중 에러 발생');
    }
  }, []);

  return <div>잠시만 기다려주세요</div>;
};

export default LoginKakao;
