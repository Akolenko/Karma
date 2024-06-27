import { Bid, completeUserBids } from "../../../features/bidsUserSlice.ts";
import { useAppDispatch } from "../../../hooks/redux.ts";

export default function BidProgress({bid}: { bid: Bid }) {
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem('userId');
  const completeHandler = () => {
    dispatch(completeUserBids({bidId: bid.id, userId}));
  }

  return (
    <>
      <div className={'rounded-md bg-white p-3 text-left hover:scale-105 transition duration-300 pl-8'}>
        <h3 className={'text-lg font-semibold tracking-wide leading-8'}>{bid.title}</h3>
        <div className={'flex gap-x-2'}>
          <img className={'w-4'} src={'/svg/Vector.svg'} alt={bid.title}/>
          <p className={'text-sm font-sans tracking-wide leading-8 text-gray-500'}>{bid.address}</p>
        </div>
        <div className={'flex flex-row justify-between items-baseline -mt-2'}>
          <p className={'font-serif'}>{'Исполнитель: Имя исполнителя'}</p>
          <div>
            <div className={'flex justify-between'}>
              <img className={'w-10'} src={'/svg/MailOutlined.svg'} alt='logo'/>
              <img className={'w-10'} src={'/svg/PhoneOutlined.svg'} alt='logo'/>
            </div>
            <button onClick={completeHandler}>Помощь оказана</button>
          </div>
        </div>
      </div>
    </>
  )
}
