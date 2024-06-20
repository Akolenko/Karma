import type { Bid } from "../../../features/bidsSlice.ts";
import { responseUserBid } from "../../../features/userResponseSlice.ts";
import { useAppDispatch } from "../../../hooks/redux.ts";

export default function Bid({bid}: { bid: Bid }) {
  const dispatch = useAppDispatch();
  const userId = 1;

  const handleRespond = () => {
    dispatch(responseUserBid({ userId, bidId: bid.id }));
  };

  return (
    <>
      <div className={'rounded-md bg-white p-3 text-left hover:scale-105 transition duration-300 pl-8'}>
        <h3 className={'text-lg font-semibold tracking-wide leading-8'}>{bid.title}</h3>
        <div className={'flex gap-x-2'}>
          <img className={'w-4'} src={'../svg/Vector.svg'} alt={bid.title}/>
          <p className={'text-sm font-sans tracking-wide leading-8 text-gray-500'}>{bid.address}</p>
        </div>
        <div className={'flex justify-between items-baseline -mt-2'}>
          <p className={'font-serif'}>{'Вытяните имя заказчика из базы :)'}</p>
          <button onClick={handleRespond} className={'focus:outline-none size-26 text-sm transition duration-300 mt-3 rounded-md' +
            ' shadow-sm border-lime-600 hover:bg-lime-600 hover:text-white' +
            ' hover:border-lime-600 bg-white text-lime-600'}>Откликнуться</button>
        </div>
            </div>
    </>
  )
}