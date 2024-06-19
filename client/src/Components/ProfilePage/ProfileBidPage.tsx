import axios from "axios";
import { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import Bid from "../Bid/Bid"


export type BidProfileType = {
    id: number,
    title:string,
    description:string,
    address:string,
    status:string,
    author_id:number
}

function ProfileBidPage(): JSX.Element {
    const [bids, setBids] = useState<BidProfileType[]>([]);
  
    useEffect(() => {
      axios("http://localhost:3000/profile/bid")
        .then((res) => setBids(res.data));
    }, []);
    console.log(bids);
    
  
    return (
        <>
        <ProfilePage/>

      <div className={"flex flex-col"}>
      {bids && bids.map((bid) => (<Bid key={bid.id} bid={bid} />))}
      </div>
      
        </>
    );
  }
  
  export default ProfileBidPage;
  