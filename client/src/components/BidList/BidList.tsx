import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.ts";
import React, { useEffect, useState } from "react";
import { filterBids, getBids } from "../../../features/bidsSlice.ts";
import Bid from "../Bid/Bid/Bid.tsx";
import { getLikes } from "../../../features/likeBidsSlice.ts";
import MapComponent from "../Map/Map.tsx";
import SearchInput from "../UI/SearchInput/SearchInput.tsx";

export default function BidList() {
  const dispatch = useAppDispatch();
  const [showMap, setShowMap] = useState(false);
  const bids = useAppSelector(state => state.bids.filteredBids)
  const userId: string | null = localStorage.getItem('userId'); // TODO: можно попробовать вынести в отдельный файл.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterBids(e.target.value))
  }


  useEffect(() => {
    dispatch(getBids())
    dispatch(getLikes())
  }, [dispatch])

  return (
    <>
      <div className={'flex items-center justify-between mx-[auto] mb-8 w-[1200px]'}>
        <h1>Заявки</h1>
        <Link to={'/bid-form'}>
          <button className={'shadow-md focus:outline-none transition duration-300 mt-3 rounded-md' +
            ' shadow-sm hover:bg-lime-600 hover:text-white' +
            ' hover:border-lime-600 bg-white text-lime-600'}>+ Cоздать заявку
          </button>
        </Link>
      </div>
      <div className={' flex flex-row'}>
        <SearchInput onChange={handleChange}/>
        <button className={'decoration-1 mb-4 underline text-blue-800'}
                onClick={() => showMap ? setShowMap(false) : setShowMap(true)}>
          Показать заявки на карте
        </button>
      </div>

      {showMap && <div className={'flex items-center justify-between mx-[300px] m-[25px] rounded-md'}><MapComponent/></div>}
      <div className={'flex flex-col gap-2'}>
        {bids && bids.length ?
          bids.map((bid) => (<Bid key={bid.id} bid={bid} userId={userId}/>))
          :
          <div className={'flex items-center mx-[auto] mb-8 w-[1200px]'}><h1 className={'text-xl'}>Ничего не найдено!</h1></div>
        }
      </div>
    </>
  )
}