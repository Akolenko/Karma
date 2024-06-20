import './App.css'
import BidForm from "../components/BidForm/BidForm.tsx";
import MainPage from "../components/MainPage/MainPage.tsx";
import { Route, Routes } from "react-router";
import ProfileBidPage from '../components/ProfilePage/ProfileBidPage.tsx';
import BidList from "../components/BidList/BidList.tsx";
import LoginForm from "../components/LoginForm.tsx";
import ProfilePage from '../сomponents/ProfilePage/ProfilePage.tsx';
import ProfileBioPage from '../сomponents/ProfilePage/ProfileBioPage.tsx';
import ProfileActiveBidPage from '../сomponents/ProfilePage/ProfileActiveBidPage.tsx';
import ProfileClosedBidPage from '../сomponents/ProfilePage/ProfileClosedBidPage.tsx';
import ProfileProgressBidPage from '../сomponents/ProfilePage/ProfileProgressBidPage.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/login'} element={<LoginForm/>}/>
        {/*<Route path={'/register'} element={<RegisterForm/>}/>Форма регистрации*/}
        <Route index element={<MainPage/>}/>
        <Route path={'/bid-form'} element={<BidForm/>}/>
        <Route path={'/bid-list'} element={<BidList/>}/>
        <Route path={"/profile/bids"} element={<ProfileBidPage/>}/>
        <Route path={"/profile"} element={<ProfilePage/>}/>
        <Route path={"/profile/bio"} element={<ProfileBioPage/>}/>
        <Route path={"/profile/bid"} element={<ProfileBidPage/>}/>
        <Route path={"/profile/bid/active"} element={<ProfileActiveBidPage/>}/>
        <Route path={"/profile/bid/progress"} element={<ProfileProgressBidPage/>}/>
        <Route path={"/profile/bid/closed"} element={<ProfileClosedBidPage/>}/>
      </Routes>

    </>
  )
}

export default App
