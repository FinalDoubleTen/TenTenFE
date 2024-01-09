import { CheckIcon } from '@components/common/icons/Icons';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isValidated: boolean;
}

const ValidifyCheck = ({ children, isValidated }: Props) => {
  return (
    <div className="flex items-center gap-px">
      <span className="body6 text-gray4">{children}</span>
      <CheckIcon color={isValidated ? '#29DDF6' : '#888888'} />
    </div>
  );
};

export default ValidifyCheck;
