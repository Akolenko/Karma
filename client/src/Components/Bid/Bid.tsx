import type { Bid } from "../../../features/bidsSlice.ts";
import { responseUserBid } from "../../../features/userResponseSlice.ts";
import { useAppDispatch } from "../../../hooks/redux.ts";
import ButtonResponse from "../ButtonResponse/ButtonResponse.tsx";

export default function Bid({bid}: { bid: Bid }) {
  const dispatch = useAppDispatch();
  const userId = 1; // TODO: хард-код, заменить при рабочей авторизации, должен храниться в глобальном стейте приложения.

  const handleRespond = ()  => {
    dispatch(responseUserBid({ userId, bidId: bid.id }));
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
          <ButtonResponse handleRespond={handleRespond} />
        </div>
      </div>
    </>
  )
}