import { useEffect } from "react";
import ProfileBidPage from "./ProfileBidPage.tsx";
import ActiveBid from "../Bid/ActiveBid.tsx";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.ts";
import { getUserBids } from "../../../features/bidsUserSlice.ts";

function ProfileActiveBidPage(): JSX.Element {
  const bids = useAppSelector(state => state.userBids.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserBids())
  }, [dispatch]);

  return (
    <>
      <ProfileBidPage/>
      <div className={"flex flex-col mt-10 gap-y-5"}>
        {bids && bids.map((bid) => {
          return <ActiveBid key={bid.id} bid={bid}/>
        })}
      </div>

    </>
  );
}

export default ProfileActiveBidPage;
