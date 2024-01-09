import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormResetField,
  UseFormSetError,
} from 'react-hook-form';

export interface AuthRequest {
  email: string;
  password: string;
}

export interface SignupFormValue extends AuthRequest {
  passwordCheck: string;
}

export interface AuthInputBoxProps {
  register: UseFormRegister<SignupFormValue>;
  inputValue: string;
  resetField: UseFormResetField<SignupFormValue>;
  errors: FieldErrors<SignupFormValue>;
}

export interface AuthEmailInputBoxProps extends AuthInputBoxProps {
  setError: UseFormSetError<SignupFormValue>;
}

export interface AuthPwCheckInputBoxProps extends AuthInputBoxProps {
  getValues: UseFormGetValues<SignupFormValue>;
}
