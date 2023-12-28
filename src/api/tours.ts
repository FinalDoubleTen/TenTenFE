import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': 'application/json',
    withCredentials: true,
  },
});

// 여행지 관련 API

// 인기 여행지 조회
export const getTours = async (region: number, page: number, size: number) => {
  const res = await client.get(
    `tours?region=${region}&page=${page}&size=${size}`,
  );
  return res;
};

// 여행지 상세 조회
export const getDetailTours = async (tourItemId: number) => {
  const res = await client.get(`tours/${tourItemId}`);
  return res;
};

// 여행 상품 리뷰 조회
export const getToursReviews = async (tourItemId: number) => {
  const res = await client.get(`tours/${tourItemId}/reviews`);
  return res;
};

// 여행지 검색
export const getToursSearch = async (
  region: number,
  category: number,
  searchWord: string,
  page: number,
  size: number,
) => {
  const res = await client.get(
    `tours/search?region=${region}&category=${category}&searchWord=${searchWord}&page=${page}&size=${size}}`,
  );
  return res;
};
