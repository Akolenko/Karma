import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.ts";
import { useEffect } from "react";
import { getBids } from "../../../features/bidsSlice.ts";
import Bid from "../Bid/Bid.tsx";

export default function BidList() {
  const dispatch = useAppDispatch();
  const bids = useAppSelector(state => state.bids.list)

  useEffect(() => {
    dispatch(getBids())
  }, [dispatch]) // eslint сказал добавь в зависимости dispatch !

  return (
    <>
      <div className={'flex gap-x-96 mb-8'}>
        <h1>Заявки</h1>
        <Link to={'/bid-form'}>
          <button className={'transition duration-300 mt-3 rounded-md' +
            ' shadow-sm border-lime-600 hover:bg-lime-500 hover:text-white' +
            ' hover:border-lime-500 bg-white text-lime-600'} >+ Cоздать заявку</button>
        </Link>
      </div>
      <div className={'flex flex-col gap-2'}>
        {bids && bids.map((bid) => (<Bid key={bid.id} bid={bid} />))}
      </div>
    </>
  )
}