
import { useSetRecoilState } from 'recoil';
import { isModifyingReviewState } from '@recoil/review';
import { PenIcon } from '@components/common/icons/Icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DetailAddSchedule from '@components/DetailSectionTop/DetailAddSchedule';

interface reviewProps {
  reviewData: any;
}

export default function DetailTourButtons({ reviewData }: reviewProps) {
  const { title, contentTypeId } = reviewData;
  const params = useParams();
  const tourItemId = Number(params.id);
  const navigate = useNavigate();
  const setIsModifyingReview = useSetRecoilState(isModifyingReviewState);

  const handlePostingReivew = () => {
    setIsModifyingReview(false);
    navigate(`/reviewPosting/${tourItemId}`, {
      state: { title, contentTypeId },
    });
  };

  useEffect(() => {
    console.log('contentTypeId', contentTypeId);
  }, [contentTypeId]);

  return (
    <div className="mt-2 flex w-full items-center justify-between gap-3 py-2.5">
      <DetailAddSchedule />
      <button className="flex h-[53px] w-1/2 items-center justify-center gap-2 rounded-lg border border-solid border-gray3 p-2">
        <PenIcon />
        <span className="text-sm" onClick={handlePostingReivew}>
          리뷰 쓰기
        </span>
      </button>
    </div>
  );
}
