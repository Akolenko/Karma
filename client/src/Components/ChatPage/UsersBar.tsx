import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import {useEffect} from "react";
import {getRooms} from "../../../features/roomSlice.ts";


function UsersBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector(state => state.rooms.list);

  useEffect(() => {
    dispatch(getRooms())
  }, [dispatch])

    return(
      <div>
        <div>
          {
            rooms && rooms.length ?
              rooms.map((room) => {
                return (
                  <div key={room.id}>
                    <div>{room.user_id}</div>
                    <div>{room.bid_id}</div>
                  </div>
                )
              })
              :
              <div>Нет чатов</div>
          }
        </div>
      </div>
    )
  }
  
  export default UsersBar;