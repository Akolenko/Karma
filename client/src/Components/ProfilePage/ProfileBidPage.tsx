import axios from "axios";
import { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import { NavLink } from "react-router-dom";

export type BidProfileType = {
  id: number,
  title: string,
  description: string,
  address: string,
  status: string,
  author_id: number
}

function ProfileBidPage(): JSX.Element {
    const [bids, setBids] = useState<BidProfileType[]>([]);
  
    // useEffect(() => {
    //   axios(`${import.meta.env.VITE_REACT_APP_API_URL}/profile/bid`)
    //     .then((res) => setBids(res.data));
    // }, []);
    // console.log(bids);
    
  
    return (
        <>
        <ProfilePage/>

        <NavLink to={"/profile/bid/active"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Активные заявки
          </button>
        </NavLink>

        <NavLink to={"/profile/bid/progress"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Заявки в работе
          </button>
        </NavLink>
        <NavLink to={"/profile/bid/closed"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Закрытые заявки
          </button>
        </NavLink>

      {/* <div className={"flex flex-col"}>
      {bids && bids.map((bid) => (<Bid key={bid.id} bid={bid} />))}
      </div> */}
      
        </>
    );
  }
  
  export default ProfileBidPage;
