import './App.css'
import BidForm from "../components/BidForm/BidForm.tsx";
import MainPage from "../components/MainPage/MainPage.tsx";
import { Route, Routes } from "react-router";
import ProfileBidPage from '../components/ProfilePage/ProfileBidPage.tsx';
import BidList from "../components/BidList/BidList.tsx";
import LoginForm from "../components/LoginForm.tsx";
import ProfilePage from "../components/ProfilePage/ProfilePage.tsx";
import ProfileBioPage from "../components/ProfilePage/ProfileBioPage.tsx";
import ProfileActiveBidPage from "../components/ProfilePage/ProfileActiveBidPage.tsx";
import ProfileProgressBidPage from "../components/ProfilePage/ProfileProgressBidPage.tsx";
import ProfileClosedBidPage from "../components/ProfilePage/ProfileClosedBidPage.tsx";
import Navbar from '../components/Navbar/Navbar.tsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path={'/login'} element={<LoginForm/>}/>
        {/*<Route path={'/register'} element={<RegisterForm/>}/>Форма регистрации*/}
        <Route index element={<MainPage/>}/>
        <Route path={'/bid-form'} element={<BidForm/>}/>
        <Route path={'/bid-list'} element={<BidList/>}/>
        <Route path={"/profile/bids"} element={<ProfileBidPage/>}/>
        <Route path={"/profile"} element={<ProfilePage />}/>
        <Route path={"/profile/bio"} element={<ProfileBioPage/>}/>
        <Route path={"/profile/bid"} element={<ProfileBidPage/>}/>
        <Route path={"/profile/bid/active"} element={<ProfileActiveBidPage/>}/>
        <Route path={"/profile/bid/progress"} element={<ProfileProgressBidPage/>}/>
        <Route path={"/profile/bid/closed"} element={<ProfileClosedBidPage/>}/>
      </Routes>

    </div>
  )
}

export default App
