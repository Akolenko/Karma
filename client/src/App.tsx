import './App.css'
import BidForm from "./Components/BidForm/BidFrom.tsx";
import MainPage from "./Components/MainPage/MainPage.tsx";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path={'/bid-form'} element={<BidForm/>}/>
      </Routes>

    </>
  )
}

export default App
