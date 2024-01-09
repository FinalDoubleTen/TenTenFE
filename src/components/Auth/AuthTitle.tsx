import { ReactNode } from 'react';

interface Props {
  title: ReactNode;
  subTitle?: string;
}

const AuthTitle = ({ title, subTitle }: Props) => {
  return (
    <div className="mb-8 mt-9 flex flex-col gap-3">
      <h1 className="title1 text-gray7">{title}</h1>
      <span className="body5 text-gray4">{subTitle}</span>
    </div>
  );
};

export default AuthTitle;
