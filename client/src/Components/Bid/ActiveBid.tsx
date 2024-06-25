import { BidType } from "../../../features/bidsSlice.ts";
import { useAppDispatch } from "../../../hooks/redux.ts";
import { deleteUserBid } from "../../../features/bidsUserSlice.ts";

export default function ActiveBid({bid}: { bid: BidType }) {
  const dispatch = useAppDispatch();
  const userId: string | null = localStorage.getItem('userId'); // TODO: можно попробовать вынести в отдельный файл.

  const deleteHandler = () => {
        dispatch(deleteUserBid({bidId: bid.id, userId}))
  }

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
          <button>Редактировать</button>
          <button onClick={deleteHandler}>Удаление</button>

        </div>
      </div>
    </>
  )
}