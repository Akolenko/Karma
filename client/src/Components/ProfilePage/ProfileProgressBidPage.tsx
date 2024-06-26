import axios from "axios";
import { useState, useEffect } from "react";
import Bid from "../Bid/Bid"
import ProfileBidPage from "./ProfileBidPage";

export type BidProfileType = {
    id: number,
    title:string,
    description:string,
    address:string,
    status:string,
    author_id:number
}

function ProfileProgressBidPage(): JSX.Element {
    const [bids, setBids] = useState<BidProfileType[]>([]);
  
    useEffect(() => {
      axios(`${import.meta.env.VITE_REACT_APP_API_URL}/profile/bids`)
        .then((res) => setBids(res.data));
    }, []);
  const userId : string | null = localStorage.getItem('userId'); // TODO: можно попробовать вынести в отдельный файл.

  
    return (
        <>
       <ProfileBidPage/>

      <div className={"flex flex-col"}>
      {bids && bids.map((bid) => 
        {return bid.status === "response" ? (<Bid key={bid.id} bid={bid} userId={userId}/>) : (<></>)})}
      </div>
      
        </>
    );
  }
  
  export default ProfileProgressBidPage;
