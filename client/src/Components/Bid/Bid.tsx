import type { Bid } from "../../../features/bidsSlice.ts";

export default function Bid({bid}:{bid: Bid}){
  return(
    <>
      <div className={'border'}>
        <h3>{bid.title}</h3>
        <p>{bid.address}</p>
        <p>{'Вытяните имя заказчика из базы :)'}</p>
      </div>
    </>
  )
}