import client from './client';

// 유저 관련 API

// 회원 정보 조회
export const getMember = async () => {
  const res = await client.get(`member`);
  return res;
};

// 회원 정보 수정
export const putMember = async (memberData: MemberRequest) => {
  const res = await client.put(`member`, memberData);
  return res;
};

// 회원 탈퇴
export const deleteMember = async () => {
  const res = await client.delete(`member`);
  return res;
};

// 나의 여정 조회
export const getMemberTrips = async () => {
  const res = await client.get(`member/trips`);
  return res;
};

// 나의 관심 여행지 조회
export const getMemberTours = async (page?: number, size?: number) => {
  try {
    const res = await client.get(`member/tours?&page=${page}&size=${size}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getTours = async (
  region?: string,
  page?: number,
  size?: number,
) => {
  try {
    const res = await client.get(
      `tours?${
        region !== '전체' && `region=${region}`
      }&page=${page}&size=${size}`,
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 나의 리뷰 조회
export const getMemberReviews = async () => {
  const res = await client.get(`member/reviews`);
  return res;
};

// 나의 관심 여행지 삭제
export const deleteMemberTours = async (tourItemId: number) => {
  const res = await client.delete(`member/tours/${tourItemId}`);
  return res;
};
