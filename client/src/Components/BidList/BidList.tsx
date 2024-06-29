import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.ts";
import { useEffect } from "react";
import { getBids } from "../../../features/bidsSlice.ts";
import Bid from "../Bid/Bid.tsx";
import { getLikes } from "../../../features/likeBidsSlice.ts";
import MapComponent from "../Map/Map.tsx";


export default function BidList() {
  const dispatch = useAppDispatch();
  const bids = useAppSelector(state => state.bids.list)
  const userId: string | null = localStorage.getItem('userId'); // TODO: можно попробовать вынести в отдельный файл.

  useEffect(() => {
    dispatch(getBids())
    dispatch(getLikes())
  }, [dispatch])
  console.log(bids)

  return (
    <>
      <div className={'flex justify-between mb-8 w-[1200px]'}>
        <h1>Заявки</h1>
        <Link to={'/bid-form'}>
          <button className={' focus:outline-none transition duration-300 mt-3 rounded-md' +
            ' shadow-sm border-lime-600 hover:bg-lime-600 hover:text-white' +
            ' hover:border-lime-600 bg-white text-lime-600'}>+ Cоздать заявку
          </button>
        </Link>
      </div>
      <MapComponent/>
      <div className={'flex flex-col gap-2'}>
        {bids && bids.length ?
          bids.map((bid) => (<Bid key={bid.id} bid={bid} userId={userId}/>))
          :
          <div>Пользователи еще не создали ни одну заявку!</div>
        }
      </div>
    </>
  )
}