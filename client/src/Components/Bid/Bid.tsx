import type { Bid } from "../../../features/bidsSlice.ts";
import { responseUserBid } from "../../../features/userResponseSlice.ts";
import { useAppDispatch } from "../../../hooks/redux.ts";
import ButtonResponse from "../ButtonResponse/ButtonResponse.tsx";
import {  useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store.ts";
import { likeBid } from "../../../features/likeBidsSlice.ts";

export default function Bid({bid, userId}: { bid: Bid, userId: string|null }) {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const handlerLike = () => {
    setCount(count + 1);
    setClicked(true)
    dispatch(likeBid({ bidId: bid.id, userId }))
  }
  const dispatch = useAppDispatch();
  // const likes = useSelector((state: RootState) =>
  //   // state.bids.likes.filter(like => like.bidId === bid.id).length
  // )

  // const handleLike = () => {
  //   // dispatch(likeBid({ bidId: bid.id, userId }));
  // };


  const handleRespond = () => {
    dispatch(responseUserBid({userId: userId, bidId: bid.id}));
  };

  return (
    <>
      <div className={'rounded-md bg-white p-3 text-left hover:scale-105 transition duration-300 pl-8'}>
        <h3 className={'text-lg font-semibold tracking-wide leading-8'}>{bid.title}</h3>
        <div className={'flex gap-x-2'}>
          <img className={'w-4'} src={'/svg/Vector.svg'} alt={bid.title}/>
          <p className={'text-sm font-sans tracking-wide leading-8 text-gray-500'}>{bid.address}</p>
        </div>
        <div className={'flex justify-between items-baseline -mt-2'}>
          <p className={'font-serif'}>{'Вытяните имя заказчика из базы :)'}</p>
          {clicked ?
            <button>🙏 {count}</button>
            :
            <button onClick={handlerLike}>🙏 {count}</button>}
          {bid.status === 'create' ? <ButtonResponse handleRespond={handleRespond}/> :
            <button className={'focus:outline-none size-26 text-sm transition duration-300 mt-3 rounded-md' +
              ' shadow-sm border-lime-600 hover:bg-lime-600 hover:text-white' +
              ' hover:border-lime-600 bg-white text-lime-600'}>Закрыть заявку</button>}
        </div>
      </div>
    </>
  )
}