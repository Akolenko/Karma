import './App.css'
import BidForm from "./Components/BidForm/BidFrom.tsx";
import MainPage from "./Components/MainPage/MainPage.tsx";
import { Route, Routes } from "react-router";
import BidList from "./Components/BidList/BidList.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path={'/bid-form'} element={<BidForm/>}/>
        <Route path={'/bid-list'} element={<BidList/>}/>
      </Routes>

    </>
  )
}

export default App
