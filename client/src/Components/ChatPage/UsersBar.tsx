import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import {useEffect, useState} from "react";
import {getRooms, RoomType} from "../../../features/roomSlice.ts";
import Messages from "./Messages.tsx";


function UsersBar(): JSX.Element {
  const [choise, setChoise] = useState({choise: false, roomId: 0})
  const dispatch = useAppDispatch();
  const rooms = useAppSelector(state => state.rooms.list);
  const activChat = 'rounded-md bg-lime-600 text-white p-3 text-left hover:scale-105 transition duration-300 pl-8 cursor-pointer m-2.5'
  const normalChat = 'rounded-md bg-white p-3 text-left hover:scale-105 transition duration-300 pl-8 cursor-pointer m-2.5'

  useEffect(() => {
    dispatch(getRooms())
  }, [dispatch])

    return(
      <div
        className='flex flex-row min-w-32'
      >
        <div className='h-[80vh] overflow-auto'>
          {
            rooms && rooms.length ?
              rooms.map((room: RoomType) => {
                return (
                  <>
                    <div
                      key={room.id}
                      className={choise.choise && choise.roomId === room.room_id ? activChat : normalChat}
                    >
                      <div
                        onClick={() => {
                          setChoise({choise: !choise.choise, roomId: room.room_id})}}
                      >
                        {room.title}
                      </div>
                    </div>
                  </>
                )
              })
              :
              <div>Нет чатов</div>
          }
        </div>
        <div>
          {
            choise.choise ?
              <Messages roomId={choise.roomId}/>
              :
              <div></div>
          }
        </div>
      </div>
    )
  }

  export default UsersBar;