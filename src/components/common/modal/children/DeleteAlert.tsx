import { deleteReview } from '@api/review';
import { ButtonPrimary, ButtonWhite } from '@components/common/button/Button';
import { isModalOpenState } from '@recoil/modal';
import {
  toastPopUpState,
  targetReviewIdState,
  tourItemIdState,
} from '@recoil/review';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const DeleteAlert = ({}) => {
  const navigate = useNavigate();
  const tourItemId = useRecoilValue(tourItemIdState);
  const targetReviewId = useRecoilValue(targetReviewIdState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setToastPopUp = useSetRecoilState(toastPopUpState);
  const queryClient = useQueryClient();

  const { mutate: deleteReviewMutate } = useMutation({
    mutationFn: (targetReviewId: number) => deleteReview(targetReviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toursReviews'] });
    },
    onError: () => console.log('error'),
  });

  const handleDeleteButton = async () => {
    await deleteReviewMutate(targetReviewId);
    setIsModalOpen(false);
    navigate(`/detail/${tourItemId}`);
    setToastPopUp(() => ({
      isPopUp: true,
      noun: '리뷰',
      verb: '삭제',
    }));
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="mt-4 flex justify-center font-bold">리뷰 삭제</div>
      <div className="mb-4 flex justify-center text-sm text-[#888888]">
        리뷰를 삭제할까요?
      </div>
      <div className="flex gap-3 ">
        <ButtonWhite
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="text-sm">
          취소
        </ButtonWhite>
        <ButtonPrimary onClick={handleDeleteButton} className="text-sm">
          삭제
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default DeleteAlert;
