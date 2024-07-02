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
  const bids = useAppSelector((state) => state.bids.filteredBids);
  const userId: string | null = localStorage.getItem("userId"); // TODO: можно попробовать вынести в отдельный файл.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterBids(e.target.value));
  };

  useEffect(() => {
    dispatch(getBids());
    dispatch(getLikes());
  }, [dispatch]);

  return (
    <>
      <div className={"flex items-center justify-center mb-8"}>
        <h1 className='text-4xl tracking-normal font-medium leading-relaxed'>
          Список доступных заявок
        </h1>
      </div>

      <div className={"flex items-end justify-around flex-row mb-5"}>
        <SearchInput onChange={handleChange} />
        <button
          className={"decoration-1 underline text-blue-800"}
          onClick={() => (showMap ? setShowMap(false) : setShowMap(true))}
        >
          Показать заявки на карте
        </button>
        <Link to={"/bid-form"}>
          <button
            className={
              "shadow-md focus:outline-none transition duration-300 rounded-md" +
              " shadow-sm hover:bg-lime-600 hover:text-white" +
              " hover:border-lime-600 bg-white text-lime-600"
            }
          >
            + Cоздать заявку
          </button>
        </Link>
      </div>

      <div className='flex flex-row justify-around'>
        <div className={"flex flex-col gap-y-5 w-[1000px]"}>
          {bids && bids.length ? (
            bids.map((bid) => <Bid key={bid.id} bid={bid} userId={userId} />)
          ) : (
            <div
              className={"flex gap-x-5 justify-center items-center mt-[100px]"}
            >
              <img className='w-10' src='svg/question.png' />
              <h1 className={"text-xl"}>
                Ничего не найдено по Вашему запросу!
              </h1>
            </div>
          )}
        </div>
        {showMap && (
          <div className={"flex justify-center w-[500px]"}>
            <div className='fixed right-502 shadow-md'>
              <MapComponent />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
