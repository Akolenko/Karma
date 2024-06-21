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

function ProfileActiveBidPage(): JSX.Element {
  const [bids, setBids] = useState<BidProfileType[]>([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_REACT_APP_API_URL}/profile/bid`)
      .then((res) => setBids(res.data));
  }, []);


  return (
    <>
      <ProfileBidPage/>

      <div className={"flex flex-col"}>
        {bids && bids.map((bid) => {
          return <Bid key={bid.id} bid={bid}/>
        })}
      </div>

    </>
  );
}

export default ProfileActiveBidPage;
