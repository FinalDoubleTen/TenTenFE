import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  return <p className="body6 mt-1 text-red">{children}</p>;
};

export default ErrorMessage;
