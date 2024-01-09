import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;

// 아래부터는 지수님 구현 사항에 따라 삭제하시면 될 것 같습니다. (좋아요 기능 때문에 잠깐 만들어둠)
client.interceptors.request.use((config) => {
  const accessToken = window.localStorage.getItem('accessToken');

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});

client.interceptors.response.use((res) => {
  if (200 <= res.status && res.status < 300) {
    return res;
  }

  return Promise.reject(res.data);
});
