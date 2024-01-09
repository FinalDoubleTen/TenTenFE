import SubmitBtn from '@components/common/button/SubmitBtn';
import AuthSurveyOption from './AuthSurveyOption';

const AuthSurvey = () => {
  return (
    <form className="mb-8">
      <div className="overflow-auto">
        {sections.map((section) => (
          <div key={section.title} className="mb-8 flex flex-col gap-4">
            <h2 className="headline1 text-gray7">{section.title}</h2>
            <div className="flex gap-2">
              {section.options.map((option) => (
                <AuthSurveyOption key={option.text} isActive={option.active}>
                  {option.text}
                </AuthSurveyOption>
              ))}
            </div>
          </div>
        ))}
      </div>
      <SubmitBtn>완료</SubmitBtn>
    </form>
  );
};

export default AuthSurvey;

const sections = [
  {
    title: '계획성',
    options: [
      { text: '철저하게', active: true },
      { text: '여유롭게', active: false },
    ],
  },
  {
    title: '활동성',
    options: [
      { text: '아침형', active: true },
      { text: '저녁형', active: false },
    ],
  },
  {
    title: '숙소',
    options: [
      { text: '분위기', active: true },
      { text: '가격', active: false },
    ],
  },
  {
    title: '음식',
    options: [
      { text: '노포 맛집', active: true },
      { text: '인테리어', active: false },
    ],
  },
  {
    title: '관광지',
    options: [
      { text: '액티비티', active: true },
      { text: '휴양', active: false },
    ],
  },
];
