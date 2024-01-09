import authClient from './authClient';
import client from './client';

// 여행지 관련 API

// 인기 여행지 조회
export const getTours = async (
  region?: string,
  page?: number,
  size?: number,
) => {
  try {
    const res = await authClient.get(
      `tours?${
        region !== '전체' && `region=${region}`
      }&page=${page}&size=${size}`,
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 여행지 상세 조회
export const getDetailTours = async (tourItemId: number) => {
  try {
    const {
      data: { data },
    } = await client.get(`tours/${tourItemId}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

// 관심 여행지 등록
export const postLikedTours = async (options: { id: number }) => {
  try {
    const { id } = options;

    let query = `/liked/${id}`;

    const res = await authClient.post(query);

    return res;
  } catch (e) {
    console.error(e);
  }
};

// 관심 여행지 삭제
export const deleteLikedTours = async (options: { id: number }) => {
  try {
    const { id } = options;

    let query = `/liked/${id}`;

    const res = await authClient.delete(query);

    return res;
  } catch (e) {
    console.error(e);
  }
};

// 여행 상품 리뷰 조회
export const getToursReviews = async (
  tourItemId: number,
  page?: number,
  size?: number,
) => {
  try {
    let url = `tours/${tourItemId}/reviews`;
    if (page !== undefined) {
      url += `?page=${page}`;
    }
    if (size !== undefined) {
      url += `${page !== undefined ? '&' : '?'}size=${size}`;
    }
    const res = await client.get(url);
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 여행지 검색
export const getToursSearch = async (options: {
  region?: string;
  searchWord: string;
  category?: string;
  page?: number;
  size?: number;
}) => {
  const { region, searchWord, category, page = 0, size } = options;

  let query = `tours/search?searchWord=${searchWord}`;

  if (region) {
    query += `&region=${region}`;
  }

  if (category) {
    query += `&category=${category}`;
  }
  query += `&page=${page}`;

  if (size) {
    query += `&size=${size}`;
  }
  const res = await client.get(query);
  return res;
};
