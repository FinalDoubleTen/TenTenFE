import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AuthInputWrapper = ({ children }: Props) => {
  return <div className="mb-6 flex flex-col gap-2">{children}</div>;
};

export default AuthInputWrapper;
