import client from './client';

// 여정 관련 API

// 여정 상세조회
export const getTrips = async (tripId: number) => {
  const res = await client.get(`trips/${tripId}`);
  return res;
};

// 여정 기본정보 수정
export const putTrips = async (tripId: number, tripsData: TripRequest) => {
  const res = await client.put(`trips/${tripId}`, tripsData);
  return res;
};

// 여정 탈퇴
export const deleteTrips = async (tripId: number) => {
  const res = await client.delete(`trips/${tripId}`);
  return res;
};

// 여정 생성
export const postTrips = async (tripsData: TripRequest) => {
  const res = await client.post(`trips`, tripsData);
  return res;
};

// 우리의 관심목록 조회
export const getTripsLike = async (
  tripId: number,
  category: number,
  page: number,
  size: number,
) => {
  const res = await client.get(
    `trips/${tripId}/tripLikedTours?category=${category}&page=${page}$size=${size}`,
  );
  return res;
};

// 우리의 관심 여행지 등록
export const postTripsLike = async (tripId: number, tourItemIds: number[]) => {
  const res = await client.post(`trips/${tripId}/tripLikedTours`, tourItemIds);
  return res;
};

// 우리의 관심 여행지 좋아요/싫어요
export const postTripsLikeHate = async (
  tripId: number,
  tourId: number,
  prefer: boolean,
) => {
  const res = await client.post(
    `trips/${tripId}/tripLikedTours/${tourId}?prefer=${prefer}`,
  );
  return res;
};

// 우리의 여행취향 조회
export const getTripsSurvey = async (tripId: number) => {
  const res = await client.get(`trips/${tripId}/survey`);
  return res;
};
