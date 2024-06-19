import './App.css'
import BidForm from "../Components/BidForm/BidForm.tsx";
import MainPage from "../Components/MainPage/MainPage.tsx";
import { Route, Routes } from "react-router";
// import ProfilePage from '../Components/ProfilePage/ProfilePage.tsx';
// import ProfileBioPage from '../Components/ProfilePage/ProfileBioPage.tsx';
import ProfileBidPage from '../Components/ProfilePage/ProfileBidPage.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path={'/bid-form'} element={<BidForm/>}/>
        {/*<Route path={"/profile"} element={<ProfilePage/>}/>*/}

        {/*<Route path={"/profile/bio"} element={<ProfileBioPage/>}/>*/}
        <Route path={"/profile/bid"} element={<ProfileBidPage/>}/>
      </Routes>

    </>
  )
}

export default App
