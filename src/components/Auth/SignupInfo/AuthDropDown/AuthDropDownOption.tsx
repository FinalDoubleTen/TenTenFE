import { CheckIcon, DownIcon } from '@components/common/icons/Icons';
import * as Select from '@radix-ui/react-select';
import React, { ReactNode, Ref } from 'react';

// interface Props {
// children: string;
// clickHandler?: VoidFunction;
// showDownIcon?: boolean;
// }

// const AuthDropDownOption = ({
//   children,
//   clickHandler,
//   showDownIcon = false,
// }: Props) => {
//   return (
// <button
//   onClick={clickHandler}
//   className="relative h-12 w-full border-b border-solid border-gray3 hover:bg-gray1">
//   {children}
//   {showDownIcon && (
//     <div className="absolute right-2 top-4">
//       <DownIcon size={20} color="#888888" />
//     </div>
//   )}
// </button>
//   );
// };

// export default AuthDropDownOption;

// const AuthDropDownOption = ({ children }: Props) => {
//   return (
//     <Select.Item>
//       <Select.ItemText>{children}</Select.ItemText>
//       <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
//         {/* <CheckIcon /> */}
//       </Select.ItemIndicator>
//     </Select.Item>
//   );
// };

// export default AuthDropDownOption;

interface SelectItemProps {
  value: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const AuthDropDownOption = React.forwardRef(
  (
    { children, className, ...props }: SelectItemProps,
    forwardedRef: Ref<HTMLDivElement>,
  ) => {
    return (
      <Select.Item
        className="body5 relative flex h-12 w-full select-none items-center border-b border-solid border-gray3 pl-[25px] pr-[35px] text-gray6 hover:bg-gray1"
        {...props}
        ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

export default AuthDropDownOption;
