import { AuthTitle } from '@components/Auth';
import { BackBox } from '@components/common';
import AuthSurvey from '@components/Auth/AuthSurvey/AuthSurvey';

const SignupSurvey = () => {
  return (
    <div className="flex h-full flex-col">
      <BackBox showSkip />
      <AuthTitle
        title={'어떤 여행을 좋아하세요?'}
        subTitle="여행 취향을 골라주세요."
      />
      <AuthSurvey />
    </div>
  );
};

export default SignupSurvey;
