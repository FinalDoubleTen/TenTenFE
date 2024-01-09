import { AuthInput, AuthInputWrapper, ValidifyCheck } from './AuthInputItem';
import type { AuthPwCheckInputBoxProps } from '@/@types/auth.types';

const AuthPwCheckInputBox = ({
  register,
  getValues,
  inputValue,
  resetField,
  errors,
}: AuthPwCheckInputBoxProps) => {
  const PwErrorTypes = errors.password?.types;
  const PwCheckErrorTypes = errors.passwordCheck?.types;

  const matchPassword = (value: string) => {
    const { password } = getValues();
    return password === value;
  };

  return (
    <AuthInputWrapper>
      <AuthInput
        label={'비밀번호 확인'}
        id="passwordCheck"
        type="password"
        placeholder={'비밀번호를 재입력해주세요'}
        register={register('passwordCheck', {
          required: '비밀번호를 재입력해주세요.',
          validate: matchPassword,
        })}
        inputValue={inputValue}
        resetField={resetField}
        isInvalid={!!PwCheckErrorTypes}
      />

      <div className="flex h-6 items-center gap-2">
        <ValidifyCheck
          isValidated={
            !!inputValue &&
            PwErrorTypes === undefined &&
            !(PwCheckErrorTypes && 'validate' in PwCheckErrorTypes)
          }>
          비밀번호 일치
        </ValidifyCheck>
      </div>
    </AuthInputWrapper>
  );
};

export default AuthPwCheckInputBox;
