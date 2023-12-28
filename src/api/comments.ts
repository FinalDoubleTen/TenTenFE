import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': 'application/json',
    withCredentials: true,
  },
});

// 댓글 관련 API

// 댓글수정
export const putComments = async (content: string, commentId: string) => {
  const res = await client.put(`comments/${commentId}`, {
    content,
  });
  return res;
};

// 댓글삭제
export const deleteComments = async (commentId: string) => {
  const res = await client.delete(`comments/${commentId}`);
  return res;
};

// 댓글작성
export const postComments = async (content: string) => {
  const res = await client.post(`comments/`, {
    content,
  });
  return res;
};