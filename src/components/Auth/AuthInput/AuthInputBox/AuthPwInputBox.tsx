import type { AuthInputBoxProps } from '@/@types/auth.types';
import { AuthInput, AuthInputWrapper, ValidifyCheck } from './AuthInputItem';

const AuthPwInputBox = ({
  register,
  inputValue,
  resetField,
  errors,
}: AuthInputBoxProps) => {
  const PwErrorTypes = errors.password?.types;

  const checkEng = (value: string) => {
    return /[a-zA-Z]/.test(value);
  };
  const checkNum = (value: string) => {
    return /[0-9]/.test(value);
  };

  return (
    <AuthInputWrapper>
      <AuthInput
        label={'비밀번호'}
        id="password"
        type="password"
        placeholder={'비밀번호를 입력해주세요'}
        register={register('password', {
          required: '비밀번호를 입력해주세요.',
          minLength: 8,
          maxLength: 20,
          validate: {
            checkEng: checkEng,
            checkNum: checkNum,
          },
        })}
        inputValue={inputValue}
        resetField={resetField}
        isInvalid={!!PwErrorTypes}
      />

      <div className="flex h-6 items-center gap-2">
        <ValidifyCheck
          isValidated={
            !!inputValue && !(PwErrorTypes && 'checkEng' in PwErrorTypes)
          }>
          영문포함
        </ValidifyCheck>
        <ValidifyCheck
          isValidated={
            !!inputValue && !(PwErrorTypes && 'checkNum' in PwErrorTypes)
          }>
          숫자포함
        </ValidifyCheck>
        <ValidifyCheck
          isValidated={
            !!inputValue &&
            !(
              (PwErrorTypes && 'minLength' in PwErrorTypes) ||
              (PwErrorTypes && 'maxLength' in PwErrorTypes)
            )
          }>
          8~20자 이내
        </ValidifyCheck>
      </div>
    </AuthInputWrapper>
  );
};

export default AuthPwInputBox;
