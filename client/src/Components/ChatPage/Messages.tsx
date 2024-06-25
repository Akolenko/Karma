import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getMessages } from "../../../features/messagesSlice";
import { io } from "socket.io-client";

function Messages(): JSX.Element {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(state => state.messages.list);

  const socket = io({
    extraHeaders: {
      "custom-header": "chat-app"
    }
  })

  useEffect(() => {

    dispatch(getMessages())
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
        </div>
      </div>
    )
  }
  
  export default Messages;