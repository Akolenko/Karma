import {memo, useEffect, useState} from "react";
import MessageForm from "./MessageForm.tsx";
import io from "socket.io-client";

export interface MessageType {
  id: number,
  room_id: number,
  user_id: number,
  text_message: string,
  is_read: boolean,
  createdAt: Date,
}

export type roomId = any

function Messages({roomId}: roomId): JSX.Element {
  const [messages, setMessages] = useState([])

  const userId: string | null = localStorage.getItem('userId')

  const socket = io('localhost:4000');

  console.log('####', roomId, userId);

  useEffect(() => {
    const searchParams = {
      room_id: roomId,
      user_id: userId
    }
    socket.emit('join', searchParams)
  }, [])

  useEffect(() => {
    socket.on('messages', ({data}) => {
      console.log('socket####', data);
      setMessages(data)
    })
  }, [setMessages])
  console.log(messages)

  return(
    <div>
      <div className='flex flex-col'>
        {
          messages && messages.length ?
            messages.map((message: MessageType) => {
              return (
                <>
                  {
                    message.user_id === Number(userId) ?
                      <div
                        key={message.id}
                        className='grow justify-end bg-gray-400'
                      >
                        <div className='flex justify-end'>{message.text_message}</div>
                      </div>
                      :
                      <div
                        key={message.id}
                        className='grow justify-start bg-gray-500'
                      >
                        <div>{message.text_message}</div>
                      </div>
                  }
                </>
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