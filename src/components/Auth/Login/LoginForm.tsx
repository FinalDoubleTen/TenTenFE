import type { AuthRequest } from '@/@types/auth.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postEmailLogin } from '@api/auth';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useState } from 'react';
import SubmitBtn from '@components/common/button/SubmitBtn';
import {
  AuthInput,
  AuthInputWrapper,
  ErrorMessage,
} from '../AuthInput/AuthInputBox';

const LoginForm = () => {
  const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm<AuthRequest>({
    reValidateMode: 'onSubmit',
  });

  const navigate = useNavigate();

  const onLoginSubmit: SubmitHandler<AuthRequest> = async (data) => {
    const { email, password } = data;
    try {
      const res = await postEmailLogin({
        email,
        password,
      });
      if (res.data.status === 200) {
        window.localStorage.setItem(
          'accessToken',
          res.data.data.tokenInfo.accessToken,
        );
        // TODO 서지수 | 로그인 후 어디로 갈지 물어보고 수정
        navigate('/');
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.error('로그인 중 에러 발생', err);
        if (err.response?.data.errorMessage) {
          setIsLoginFailed(true);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <AuthInputWrapper>
        <AuthInput
          label={'이메일'}
          id="email"
          type="email"
          isAutoFocus
          placeholder={'이메일을 입력하세요'}
          register={register('email', {
            required: '아이디를 입력해주세요.',
          })}
          inputValue={watch('email')}
          resetField={resetField}
          isInvalid={!!errors.email}
        />
      </AuthInputWrapper>

      <AuthInputWrapper>
        <AuthInput
          label={'비밀번호'}
          id="password"
          type="password"
          placeholder={'비밀번호를 입력하세요'}
          register={register('password', {
            required: '비밀번호를 입력해주세요.',
          })}
          inputValue={watch('password')}
          resetField={resetField}
          isInvalid={!!errors.password}
        />

        {errors.email?.type === 'required' && (
          <ErrorMessage>{`${errors.email.message}`}</ErrorMessage>
        )}
        {!errors.email && errors.password?.type === 'required' && (
          <ErrorMessage>{`${errors.password.message}`}</ErrorMessage>
        )}
        {!errors.email && !errors.password && isLoginFailed && (
          <>
            <ErrorMessage>
              이메일 또는 비밀번호를 잘못 입력했습니다.
              <br />
              입력하신 내용을 다시 확인해주세요.
            </ErrorMessage>
          </>
        )}
      </AuthInputWrapper>

      {/* TODO 서지수 | 버튼 컴포넌트 개선 */}
      <SubmitBtn>로그인</SubmitBtn>
    </form>
  );
};

export default LoginForm;
