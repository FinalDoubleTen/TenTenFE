import { CloseIcon } from '@components/common/icons/Icons';
import { UseFormRegisterReturn, UseFormResetField } from 'react-hook-form';

interface Props {
  label: string;
  subLabel?: string;
  required?: boolean;
  id: 'email' | 'password' | 'passwordCheck' | 'nickname';
  type?: 'text' | 'email' | 'password';
  isAutoFocus?: boolean;
  placeholder: string;
  register: UseFormRegisterReturn;
  blurHandler?: VoidFunction;
  inputValue: string;
  resetField: UseFormResetField<any>; // TODO 서지수 | any 제거
  isInvalid: boolean;
}

const AuthInput = ({
  label,
  subLabel,
  required,
  id,
  type = 'text',
  isAutoFocus = false,
  placeholder,
  register,
  blurHandler,
  inputValue,
  resetField,
  isInvalid,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label htmlFor={id} className="body3 text-main1">
          {label}
        </label>
        <span className="body5 text-main1">{subLabel}</span>
        {required && <span className="body5 text-red"> *</span>}
      </div>
      <div
        className={`flex h-10 items-center border-b-[1.25px] border-solid border-gray3 ${
          isInvalid ? 'border-red' : 'focus-within:border-main2'
        }`}>
        <input
          id={id}
          className="w-full text-sm font-normal outline-none placeholder:text-gray3"
          type={type}
          autoFocus={isAutoFocus}
          placeholder={placeholder}
          {...register}
          onBlur={blurHandler}
        />
        {inputValue && (
          <div
            className="cursor-pointer"
            onClick={() => {
              resetField(id);
            }}>
            <CloseIcon size={20} fill="#D7D7D7" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthInput;
