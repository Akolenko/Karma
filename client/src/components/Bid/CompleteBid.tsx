import { Bid } from "../../../features/bidsUserSlice.ts";

export default function CompleteBid({bid}: { bid: Bid }) {
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
          <div><p>Завершено</p></div>
        </div>
      </div>
    </>
  )
}