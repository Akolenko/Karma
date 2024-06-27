import {memo, useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getMessages } from "../../../features/messagesSlice";
import MessageForm from "./MessageForm.tsx";
// import io from "socket.io-client";

export type roomId = any

function Messages({roomId}: roomId): JSX.Element {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(state => state.messages.list);

  // const socket = io('localhost:4000');

  useEffect(() => {
    // socket.on('connect', () => {})
    dispatch(getMessages(roomId))
  }, [dispatch])

  // const userId: string | null = localStorage.getItem('userId')

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