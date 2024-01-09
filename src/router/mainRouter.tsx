import { Route, Routes } from 'react-router-dom';
import Main from '@pages/main/main.page';
import { Search } from '@pages/search/search.page';
import Detail from '@pages/detail/detail.page';
import ReviewComment from '@pages/reviewComment/reviewComment.page';
import ReviewPosting from '@pages/reviewPosting/reviewPosting.page';
import WishList from '@pages/wishList/wishList.page';
import { Signup, SignupSuccess, SignupSurvey, SignupInfo } from '@pages/signup';
import { Login, LoginKakao } from '@pages/login';
import MainLayout from './routerLayout';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reviewPosting/:id" element={<ReviewPosting />} />
          <Route path="/reviewComment/:id" element={<ReviewComment />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/success" element={<SignupSuccess />} />
          <Route path="/signup/survey" element={<SignupSurvey />} />
          <Route path="/signup/info" element={<SignupInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/kakao" element={<LoginKakao />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
