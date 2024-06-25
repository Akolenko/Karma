import {  useEffect } from "react";
import ProfileBidPage from "./ProfileBidPage";
import ActiveBid from "../Bid/ActiveBid.tsx";
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

function ProfileActiveBidPage(): JSX.Element {
  // const [bids, setBids] = useState<BidProfileType[]>([]);
  const bids = useAppSelector(state => state.userBids.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserBids())
  }, [dispatch]);

  //TODO: так как это страница отвечает за отображение заявок созданных пользователем,
  // TODO: то в дальнейшем надо выполнять проверку user_id и author_id для скрытия кнопки откликнуться на "закрыть заявку"

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
