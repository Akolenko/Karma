import {memo, useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getMessages } from "../../../features/messagesSlice";
import MessageForm from "./MessageForm.tsx";
import io from "socket.io-client";

export type roomId = any

function Messages({roomId}: roomId): JSX.Element {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(state => state.messages.list);

  const userId: string | null = localStorage.getItem('userId')

  const socket = io('localhost:4000');

  console.log('####', roomId, userId);

  useEffect(() => {
    const searchParams = {
      room_id: roomId,
      user_id: userId
    }
    socket.emit('join', searchParams)
    dispatch(getMessages(roomId))
  }, [dispatch])

    return(
      <div>
        <div>
          {
            messages && messages.length ?
            messages.map((message) => {
              return (
                <div key={message.id}>
                  <div>{message.text_message}</div>
                </div>
              )
            })
            :
            <div>Нет сообщений</div>
          }
          <MessageForm roomId={roomId}/>
        </div>
      </div>
    )
  }
  
  export default memo(Messages);