import { ReactNode } from 'react';

interface ButtonProps {
  isActive?: boolean;
  type?: 'submit' | 'button' | 'reset' | undefined;
  onClick?: VoidFunction;
  children: ReactNode;
  outline?: boolean;
}

const SubmitBtn = ({
  isActive = true,
  type = 'submit',
  onClick,
  children,
  outline = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={!isActive}
      className={`btn-base headline1 ${
        outline
          ? 'border-[1.5px] border-solid border-main2 bg-white text-main2'
          : 'bg-main2  text-white'
      } h-14 disabled:cursor-not-allowed disabled:bg-gray3`}>
      {children}
    </button>
  );
};

export default SubmitBtn;
