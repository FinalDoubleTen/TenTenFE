import axios from 'axios';

const authClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

authClient.interceptors.request.use(
  function (config) {
    // 요청보낼 때마다 로컬스토리지가 있으면 엑세스토큰을 넣어서 보냄
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

authClient.interceptors.response.use(
  function (res) {
    const { status, data, config: originRequest } = res;
    // 엑세스 토큰 만료 / 리프레시 토큰 유효: 엑세스토큰을 재발급해서 응답 보내줌
    if (status === 201) {
      const newAccessToken = data.accessToken;
      window.localStorage.setItem('accessToken', newAccessToken);
      return authClient(originRequest);
    }
    return res;
  },
  function (error) {
    console.error(error);

    if (error.response.status === 401) {
      // 응답이 401으로 오는 경우
      // 1. 엑세스 토큰이 없는 경우(엑세스 토큰이 없습니다.)
      // 2. 리프레시 토큰이 만료된 경우(리프레시 토큰이 존재하지 않습니다.)
      // 3. 리프레시 토큰이 없는 경우
      // 전부 비로그인으로 처리합니다.
      console.log('401에러 발생 로그인 페이지로 이동시키면 됩니다.');
    }
    return Promise.reject(error);
  },
);

export default authClient;
