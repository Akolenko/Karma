import axios from "axios";
import { useState, useEffect } from "react";
import Bid from "../Bid/Bid"
import ProfileBidPage from "./ProfileBidPage";

export type BidProfileType = {
  id: number,
  title: string,
  description: string,
  address: string,
  status: string,
  author_id: number
}

function ProfileClosedBidPage(): JSX.Element {
  const [bids, setBids] = useState<BidProfileType[]>([]);
  const userId = localStorage.getItem('user')

  useEffect(() => {
    axios(`${import.meta.env.VITE_REACT_APP_API_URL}/profile/bids`)
      .then((res) => setBids(res.data));
  }, []);
  // console.log(bids);


  return (
    <>
      <ProfileBidPage/>
      <div className={"flex flex-col"}>
        {bids && bids.map((bid) => {
          return bid.status === "closed" ? (<Bid key={bid.id} bid={bid} userId={userId}/>) : (<></>)
        })}
      </div>
    </>
  );
}

export default ProfileClosedBidPage;
