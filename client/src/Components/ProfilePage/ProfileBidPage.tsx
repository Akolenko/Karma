import { useEffect } from "react";
import Bid from "../Bid/Bid"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.ts";
import { getUserBids } from "../../../features/bidsUserSlice.ts";


export type BidProfileType = {
  id: number,
  title: string,
  description: string,
  address: string,
  status: string,
  author_id: number
}

function ProfileBidPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const userBids = useAppSelector(state => state.userBids.list)

  useEffect(() => {
    dispatch(getUserBids())
  }, [dispatch])

  return (
    <>
      {/*<ProfilePage/>*/}
      <div className={"flex flex-col gap-2 w-[1200px]"}>
        {userBids && userBids.length && userBids.map((bid) => (<Bid key={bid.id} bid={bid}/>))}
      </div>

    </>
  );
}

export default ProfileBidPage;
  