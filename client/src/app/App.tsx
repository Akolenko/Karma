import './App.css'

import BidForm from '../components/BidForm/BidForm.tsx';
import MainPage from "../components/MainPage/MainPage.tsx";
import { Route, Routes } from "react-router";
import ProfileBidPage from '../components/ProfilePage/ProfileBidPage.tsx';
import BidList from "../components/BidList/BidList.tsx";
import ProfilePage from "../components/ProfilePage/ProfilePage.tsx";
import ProfileBioPage from "../components/ProfilePage/ProfileBioPage.tsx";
import ProfileActiveBidPage from "../components/ProfilePage/ProfileActiveBidPage.tsx";
import ProfileProgressBidPage from "../components/ProfilePage/ProfileProgressBidPage.tsx";
import ProfileCompleteBidPage from '../components/ProfilePage/ProfileCompleteBidPage.tsx';
import RegisterForm from '../components/RegisterForm/RegisterForm.tsx';
import MapComponent from '../components/Map/Map.tsx';
import Navbar from '../components/Navbar/Navbar.tsx';
import ChatPage from '../components/ChatPage/ChatPage.tsx';
import ResponsesPage from "../components/Pages/ResponsesPage/ResponsesPage.tsx";
import BidPage from '../components/Pages/BidPage.tsx';
import CertificateList from '../components/Certificate/CertificateList.tsx';
import LoginForm from "../components/LoginForm.tsx";

function App() {


  return (
    <>
      <Navbar/>
      <Routes> //TODO: Сделать рефакторинг, в отдельный файл.
        <Route path={'/login'} element={<LoginForm/>}/>
        <Route path={'/register'} element={<RegisterForm/>}/>
        <Route index element={<MainPage/>}/>
        <Route path={'/bid-form'} element={<BidForm/>}/>
        <Route path={'/bids-list'} element={<BidList/>}/>
        <Route path={"/profile"} element={<ProfilePage/>}/>
        <Route path={"/profile/bio"} element={<ProfileBioPage/>}/>
        <Route path={"/profile/bid"} element={<ProfileBidPage/>}/>
        <Route path={"profile/responses"} element={<ResponsesPage/>}/>
        <Route path={"/profile/bid/active"} element={<ProfileActiveBidPage/>}/>
        <Route path={"/profile/bid/progress"} element={<ProfileProgressBidPage/>}/>
        <Route path={"/profile/bid/closed"} element={<ProfileCompleteBidPage/>}/>
        <Route path={"/map"} element={<MapComponent/>}/>
        <Route path={"/chat"} element={<ChatPage/>}/>
        <Route path={"/bid/:id"} element={<BidPage/>}/>
        <Route path={"/certificates"} element={<CertificateList/>}/>
      </Routes>
    </>
  )
}

export default App
