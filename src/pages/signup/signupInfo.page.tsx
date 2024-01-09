import { getCheckNickname } from '@api/auth';
import { putMember } from '@api/member';
import { AuthTitle } from '@components/Auth';
import {
  AuthInput,
  AuthInputWrapper,
} from '@components/Auth/AuthInput/AuthInputBox';
import AuthDropDown from '@components/Auth/SignupInfo/AuthDropDown/AuthDropDown';
import { BackBox } from '@components/common';
import SubmitBtn from '@components/common/button/SubmitBtn';
import { CameraIcon } from '@components/common/icons/Icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const SignupInfo = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    resetField,
    setError,
    formState: { errors, isValid },
  } = useForm<any>({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const navigate = useNavigate();

  const nicknamePatternValue = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,12}$/;

  const onNicknameBlur = async () => {
    if (nicknamePatternValue.test(getValues('nickname'))) {
      try {
        const res = await getCheckNickname(getValues('nickname'));
        if (res.status === 200) {
          const isExist = res.data.data.exists;
          if (isExist) {
            setError('nickname', { message: '이미 사용 중인 닉네임입니다.' });
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const onInfoSubmit: SubmitHandler<any> = async (data) => {
    // const { email, password } = data;

    try {
      const res = await putMember({
        nickname: 'zkzkzkzk',
        profileImageUrl: 'http://hfstdfg.jpg',
        ageType: 'TWENTIES',
        genderType: 'MALE',
      });
      if (res.status === 200) {
        navigate('/');
      }
    } catch (err) {
      console.error('회원정보 수정 요청 중 에러 발생', err);
    }
  };

  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);

    // let fileArr = e.target.files;
    // setPostImg(Array.from(fileArr));

    // let fileRead = new FileReader();
    // fileRead.onload = function(){
    //     setPreviewImg(fileRead.result);
    // };

    // fileRead.readAsDataURL(file[0]);
  };

  return (
    <div className="flex h-[95vh] flex-col">
      <BackBox showBack showSkip />
      <AuthTitle
        title={
          <>
            프로필 사진과 닉네임을
            <br />
            설정해주세요.
          </>
        }
      />
      <form onSubmit={handleSubmit(onInfoSubmit)}>
        <div>
          <div className="mb-10 w-full">
            <label
              htmlFor="profileImage"
              className="relative mx-auto flex h-20 w-20 cursor-pointer justify-center overflow-hidden">
              <img
                className="rounded-full"
                src="https://d2v80xjmx68n4w.cloudfront.net/gigs/FyS0m1682137694.jpg"
              />
              <div className="absolute bottom-0 right-0	">
                <CameraIcon />
                {/* <img src="@/assets/images/cameraCircle.svg">
              </img> */}
              </div>
            </label>
          </div>
          <input
            className="hidden"
            id="profileImage"
            type="file"
            accept="image/*"
            onChange={onImgChange}
          />
          <div className="mb-6">
            <AuthInput
              label="닉네임"
              subLabel="(2~12자리 한글 및 영문, 숫자)"
              required
              id="nickname"
              isAutoFocus
              placeholder={'닉네임을 입력해주세요'}
              register={register('nickname', {
                required: '닉네임을 입력해주세요.',
                pattern: {
                  value: nicknamePatternValue,
                  message: '2~12자리 한글 및 영문, 숫자',
                },
              })}
              blurHandler={onNicknameBlur}
              inputValue={watch('nickname')}
              resetField={resetField}
              isInvalid={!!errors.nickname}
            />
          </div>

          <div className="flex flex-col gap-6">
            <AuthDropDown
              label="성별"
              text={'성별을 선택해주세요.'}
              options={genderArr}
            />
            <AuthDropDown
              label="연령대"
              text={'연령대를 선택해주세요.'}
              options={ageArr}
            />
          </div>
        </div>
        <div className="mt-auto">
          <SubmitBtn isActive={isValid}>완료</SubmitBtn>
        </div>
      </form>
    </div>
  );
};

export default SignupInfo;

const genderArr: SelectOption[] = [
  { id: '1', value: '여' },
  { id: '2', value: '남' },
  { id: '3', value: '기타' },
];

const ageArr: SelectOption[] = [
  { id: '1', value: '10대' },
  { id: '2', value: '20대' },
  { id: '3', value: '30대' },
  { id: '4', value: '40대' },
  { id: '5', value: '50대 이상' },
];
