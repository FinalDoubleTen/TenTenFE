import { getCheckEmail } from '@api/auth';
import { AuthInputWrapper, AuthInput, ErrorMessage } from './AuthInputItem';
import type { AuthEmailInputBoxProps } from '@/@types/auth.types';

const AuthEmailInputBox = ({
  register,
  inputValue,
  resetField,
  errors,
  setError,
}: AuthEmailInputBoxProps) => {
  const patternValue = /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/;

  const emailError = errors.email;
  const emailErrorMessage = emailError?.message;

  const onEmailBlur = async () => {
    if (patternValue.test(inputValue)) {
      try {
        const res = await getCheckEmail(inputValue);
        if (res.status === 200) {
          const isExist = res.data.data.exists;
          if (isExist) {
            setError('email', { message: '이미 사용 중인 이메일입니다.' });
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <AuthInputWrapper>
      <AuthInput
        label={'이메일'}
        id="email"
        type="email"
        isAutoFocus={true}
        placeholder={'이메일을 입력하세요'}
        register={register('email', {
          required: '아이디를 입력해주세요.',
          pattern: {
            value: patternValue,
            message: '이메일 형식이 올바르지 않습니다.',
          },
        })}
        blurHandler={onEmailBlur}
        inputValue={inputValue}
        resetField={resetField}
        isInvalid={!!emailError}
      />

      {emailErrorMessage && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
    </AuthInputWrapper>
  );
};

export default AuthEmailInputBox;
