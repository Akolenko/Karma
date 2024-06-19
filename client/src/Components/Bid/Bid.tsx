import type { Bid } from "../../../features/bidsSlice.ts";

export default function Bid({bid}: { bid: Bid }) {
  return (
    <>
      <div className={'rounded-md bg-white p-3 text-left hover:scale-105 transition duration-300 pl-8'}>
        <h3 className={'text-lg font-semibold tracking-wide leading-8'}>{bid.title}</h3>
        <div className={'flex gap-x-2'}>
          <img className={'w-4'} src={'../../../public/svg/Vector.svg'} alt={bid.title}/>
          <p className={'text-sm font-sans tracking-wide leading-8 text-gray-500'}>{bid.address}</p>
        </div>
        <div className={'flex justify-between items-baseline'}>
          <p className={'font-serif'}>{'Вытяните имя заказчика из базы :)'}</p>
          <button className={'size-26 text-sm transition duration-300 mt-3 rounded-md' +
            ' shadow-sm border-lime-600 hover:bg-lime-500 hover:text-white' +
            ' hover:border-lime-500 bg-white text-lime-600 h-8'}>Откликнуться</button>
        </div>

      </div>
    </>
  )
}