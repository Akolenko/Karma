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
const closedBids = []
  const userId = localStorage.getItem('user')

  return (
    <>
      <ProfileBidPage/>
      <div className={"flex flex-col"}>
        {closedBids && closedBids.map((bid) => {
          return <Bid key={bid.id} bid={bid} userId={userId}/>)
        })}

      </div>
    </>
  );
}

export default ProfileClosedBidPage;
