import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import {useEffect, useState} from "react";
import {getRooms, RoomType} from "../../../features/roomSlice.ts";
import Messages from "./Messages.tsx";

function UsersBar(): JSX.Element {
  const [choise, setChoise] = useState(false)
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
                      onClick={() => setChoise(!choise)}
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
            choise ?
              <Messages/>
              :
              <div></div>
          }
        </div>
      </div>
    )
  }
  
  export default UsersBar;