import './App.css'
import BidForm from "../Components/BidForm/BidForm.tsx";
import MainPage from "../Components/MainPage/MainPage.tsx";
import { Route, Routes } from "react-router";
import ProfileBidPage from '../Components/ProfilePage/ProfileBidPage.tsx';
import BidList from "../Components/BidList/BidList.tsx";
import LoginForm from "../Components/LoginForm.tsx";
import ProfilePage from "../Components/ProfilePage/ProfilePage.tsx";
import ProfileBioPage from "../Components/ProfilePage/ProfileBioPage.tsx";
import ProfileActiveBidPage from "../Components/ProfilePage/ProfileActiveBidPage.tsx";
import ProfileProgressBidPage from "../Components/ProfilePage/ProfileProgressBidPage.tsx";
import ProfileClosedBidPage from "../Components/ProfilePage/ProfileClosedBidPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/login'} element={<LoginForm/>}/>
        {/*<Route path={'/register'} element={<RegisterForm/>}/>Форма регистрации*/}
        <Route index element={<MainPage/>}/>
        <Route path={'/bid-form'} element={<BidForm/>}/>
        <Route path={'/bid-list'} element={<BidList/>}/>
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
