import { deleteComments } from '@api/comments';
import { DeleteIcon, PenIcon } from '@components/common/icons/Icons';
import {
  isModalOpenState,
  titleState,
  modalChildrenState,
} from '@recoil/modal';
import {
  contentState,
  contentTypeIdState,
  isModifyingCommentState,
  isModifyingReviewState,
  keywordsState,
  ratingState,
  targetCommentIdState,
  targetReviewIdState,
  tourItemIdState,
} from '@recoil/review';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { commentState } from '@recoil/review';

const EditDelete: React.FC = () => {
  const rating = useRecoilValue(ratingState);
  const keywords = useRecoilValue(keywordsState);
  const content = useRecoilValue(contentState);
  const title = useRecoilValue(titleState);
  const targetReviewId = useRecoilValue(targetReviewIdState);
  const targetCommentId = useRecoilValue(targetCommentIdState);
  const tourItemId = useRecoilValue(tourItemIdState);
  const contentTypeId = useRecoilValue(contentTypeIdState);
  const setIsModifyingReview = useSetRecoilState(isModifyingReviewState);
  const setIsModifyingComment = useSetRecoilState(isModifyingCommentState);
  const navigate = useNavigate();
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalChildren = useSetRecoilState(modalChildrenState);
  const setComment = useSetRecoilState(commentState);

  const queryClient = useQueryClient();

  const handleEdit = () => {
    if (title == '내 리뷰') {
      setIsModifyingReview(true);
      setIsModalOpen(false);
      navigate(`/reviewPosting/${tourItemId}`, {
        state: {
          title,
          contentTypeId,
          targetReviewId,
          rating,
          keywords,
          content,
        },
      });
    } else if (title == '내 댓글') {
      setIsModifyingComment(true);
      setIsModalOpen(false);
    }
  };

  const { mutate: deleteCommentMutate } = useMutation({
    mutationFn: (targetCommentId: number) => deleteComments(targetCommentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviewComments'] });
    },
    onError: () => console.log('error'),
  });

  const handleDelete = async () => {
    if (title === '내 리뷰') {
      setModalChildren('DeleteAlert');
    } else if (title === '내 댓글') {
      await deleteCommentMutate(targetCommentId);
      setIsModalOpen(false);
      setComment('');
    }
  };

  return (
    <div className="mt-2">
      <div className="text-md mb-4 font-bold">{title}</div>
      <div>
        <button
          onClick={handleEdit}
          className="flex h-[52px] w-full cursor-pointer items-center gap-1">
          <PenIcon color="#888888" />
          <p className="text-gray7">수정하기</p>
        </button>
        <button
          onClick={handleDelete}
          className="flex h-[52px] w-full cursor-pointer items-center gap-1">
          <DeleteIcon color="#888888" />
          <p className="text-gray7">삭제하기</p>
        </button>
      </div>
    </div>
  );
};

export default EditDelete;
