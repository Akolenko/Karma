import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.ts";
import { useEffect } from "react";
import { getBids } from "../../../features/bidsSlice.ts";

export default function BidList() {
  const dispatch = useAppDispatch();
  const bids = useAppSelector(state => state.bids.list)

  useEffect(() => {

    dispatch(getBids())
  }, [])

  return (
    <>
      <div className={'flex gap-x-96'}>
        <h1>Заявки</h1>
        <Link to={'/bid-form'}>
          <button>+ Cоздать заявку</button>
        </Link>
      </div>
      <div>
        {bids.map((bid) => (<h2>bid.title</h2>))}
      </div>
    </>
  )
}