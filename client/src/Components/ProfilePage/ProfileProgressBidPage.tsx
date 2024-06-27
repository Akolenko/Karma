import ProfileBidPage from "./ProfileBidPage";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.ts";
import { useEffect } from "react";
import { getUserBidsProgress } from "../../../features/bidsUserSlice.ts";
import BidProgress from "../Bid/BidInProgress.tsx";

function ProfileProgressBidPage(): JSX.Element {
  const bids = useAppSelector(state => {
    return state.userBids.list;
  })
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserBidsProgress())
  }, [dispatch]);

  return (
    <>
      <ProfileBidPage/>
      <div className={"flex flex-col"}>
        {bids && bids.map((bid) => {
          return <BidProgress key={bid.id} bid={bid}/>
        })}
      </div>

    </>
  );
}

export default ProfileProgressBidPage;
