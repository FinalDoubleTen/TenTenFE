import { useNavigate } from 'react-router-dom';
import { LeftIcon } from '../icons/Icons';
import { ReactNode } from 'react';

interface Props {
  showBack?: boolean;
  // backHandler?: VoidFunction;
  children?: ReactNode;
  showSkip?: boolean;
  showSave?: boolean;
}

const BackBox = ({
  showBack,
  // backHandler,
  children,
  showSkip,
  showSave,
}: Props) => {
  const navigate = useNavigate();

  const onSkipClick = () => {
    console.log('스킵 버튼 클릭');
  };
  const onSaveClick = () => {
    console.log('저장 버튼 클릭');
  };

  return (
    <div className="flex h-10 items-center justify-between">
      {showBack && (
        <button
          onClick={() => {
            navigate(-1);
          }}>
          <LeftIcon />
        </button>
      )}
      {children}
      {showSkip && (
        <button className="body4 text-gray7" onClick={onSkipClick}>
          건너뛰기
        </button>
      )}
      {showSave && (
        <button className="headline2 text-main2" onClick={onSaveClick}>
          저장
        </button>
      )}
    </div>
  );
};

export default BackBox;
