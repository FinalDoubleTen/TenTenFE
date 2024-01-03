import { ReactComponent as PenIcon } from '@assets/images/Pen.svg';
import { ReactComponent as CalendarIcon } from '@assets/images/Calendar.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

interface reviewProps {
  reviewData: any;
}

export default function DetailTourButtons({ reviewData }: reviewProps) {
  const { title, contentTypeId } = reviewData;
  const params = useParams();
  const tourItemId = Number(params.id);
  const navigate = useNavigate();

  const handlePostingReivew = () => {
    navigate(`/reviewPosting/${tourItemId}`, {
      state: { title, contentTypeId },
    });
  };
  useEffect(() => {
    console.log('contentTypeId', contentTypeId);
  }, [contentTypeId]);
  return (
    <div className="mt-2 flex w-full items-center justify-between py-2.5">
      <button className="flex h-[53px] w-[157.5px] items-center justify-center gap-2 rounded-lg border border-solid border-gray3 p-2">
        <CalendarIcon />
        <span className="text-sm">일정 추가</span>
      </button>
      <button className="flex h-[53px] w-[157.5px] items-center justify-center gap-2 rounded-lg border border-solid border-gray3 p-2">
        <PenIcon />
        <span className="text-sm" onClick={handlePostingReivew}>
          리뷰 쓰기
        </span>
      </button>
    </div>
  );
}