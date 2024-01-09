interface Props {
  children: string;
  isActive: boolean;
}

const AuthSurveyOption = ({ children, isActive }: Props) => {
  return (
    <button
      className={`${
        isActive ? 'border-main2 text-main2' : 'border-gray3 text-gray4'
      } body3 h-10 rounded-[168px] border-[1.5px] border-solid  px-7 py-2`}>
      {children}
    </button>
  );
};

export default AuthSurveyOption;
