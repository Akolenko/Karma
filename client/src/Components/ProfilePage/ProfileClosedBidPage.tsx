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

function ProfileClosedBidPage(): JSX.Element {
    const [bids, setBids] = useState<BidProfileType[]>([]);
  
    useEffect(() => {
      axios("http://localhost:3000/profile/bid")
        .then((res) => setBids(res.data));
    }, []);
    // console.log(bids);
    
  
    return (
        <>
       <ProfileBidPage/>

      <div className={"flex flex-col"}>
      {bids && bids.map((bid) => 
        {return bid.status === "closed" ? (<Bid key={bid.id} bid={bid} />) : (<></>)})}
      </div>
      
        </>
    );
  }
  
  export default ProfileClosedBidPage;
