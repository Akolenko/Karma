import './App.css'
import BidForm from "../components/BidForm/BidForm.tsx";
import MainPage from "../components/MainPage/MainPage.tsx";
import { Route, Routes } from "react-router";
// import ProfilePage from '../Components/ProfilePage/ProfilePage.tsx';
// import ProfileBioPage from '../Components/ProfilePage/ProfileBioPage.tsx';
import ProfileBidPage from '../components/ProfilePage/ProfileBidPage.tsx';
import BidList from "../components/BidList/BidList.tsx";
import LoginForm from "../components/LoginForm.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/login'} element={<LoginForm/>}/>
        {/*<Route path={'/register'} element={<RegisterForm/>}/>Форма регистрации*/}
        <Route index element={<MainPage/>}/>
        <Route path={'/bid-form'} element={<BidForm/>}/>
        <Route path={'/bid-list'} element={<BidList/>}/>
        {/*<Route path={"/profile"} element={<ProfilePage/>}/>*/}
        {/*<Route path={"/profile/bio"} element={<ProfileBioPage/>}/>*/}
        <Route path={"/profile/bids"} element={<ProfileBidPage/>}/>
      </Routes>

    </>
  )
}

export default App
