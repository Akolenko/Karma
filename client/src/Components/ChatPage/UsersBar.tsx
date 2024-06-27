import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import {useEffect, useState} from "react";
import {getRooms, RoomType} from "../../../features/roomSlice.ts";
import Messages from "./Messages.tsx";
import MessageForm from "./MessageForm.tsx";

function UsersBar(): JSX.Element {
  const [choise, setChoise] = useState({choise: false, roomId: 0})
  const dispatch = useAppDispatch();
  const rooms = useAppSelector(state => state.rooms.list);
  console.log(choise)

  useEffect(() => {
    dispatch(getRooms())
  }, [dispatch])

    return(
      <div>
        <div>
          {
            rooms && rooms.length ?
              rooms.map((room: RoomType) => {
                console.log(room)
                return (
                  <div key={room.id}>
                    <div
                      className='bg-green-500 border'
                      onClick={() => setChoise({choise: !choise.choise, roomId: room.id})}
                    >
                      {room.Bid.title}
                    </div>
                  </div>
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