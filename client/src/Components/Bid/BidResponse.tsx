import { BidType } from "../../../features/bidsSlice.ts";
import { useAppDispatch } from "../../../hooks/redux.ts";
import { cancelResponse } from "../../../features/userResponseSlice.ts";
import {NavLink} from "react-router-dom";

export default function BidResponse({response, userId }:{response: BidType, userId: string|null}) {

  const dispatch = useAppDispatch();
  const handlerClick = () => {
    dispatch(cancelResponse({bidId: response.id, userId}))
  }


  return (
    <>
      <div className={'rounded-md bg-white p-3 text-left hover:scale-105 transition duration-300 pl-8'}>
        <h3 className={'text-lg font-semibold tracking-wide leading-8'}>{response.title}</h3>
        <div className={'flex gap-x-2'}>
          <img className={'w-4'} src={'/svg/Vector.svg'} alt='logo'/>
          <p className={'text-sm font-sans tracking-wide leading-8 text-gray-500'}>{response.address}</p>
        </div>
        <div className={'flex justify-between items-baseline -mt-2'}>
          <p className={'font-serif'}>{'Вытяните имя заказчика из базы :)'}</p>
          <div>
            <div className={'flex justify-between'}>
              <NavLink to={`/chat/?chat=${response.id}&choise=${true}`}>
                <img className={'w-10'} src={'/svg/MailOutlined.svg'} alt='logo'/>
              </NavLink>
              <img className={'w-10'} src={'/svg/PhoneOutlined.svg'} alt='logo'/>
            </div>
            <button className={'text-sm'} onClick={handlerClick}>Отказать в помощи</button>
          </div>
        </div>
      </div>
    </>
  )
}
