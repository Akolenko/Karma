import {useEffect, useState} from "react";
import io from "socket.io-client";

export interface MessageType {
  id: number,
  room_id: number,
  user_id: number,
  text_message: string,
  is_read: boolean,
  createdAt: Date,
  updatedAt: Date
}

export type MessagesType = [MessageType] | any

export type roomId = any

function Messages({roomId}: roomId): JSX.Element {
  const [messages, setMessages] = useState<MessagesType>([])
  const [newMessage, setNewMessage] = useState('')

  const userId: string | null = localStorage.getItem('userId')

  const socket = io('localhost:4000');

  const inputHandler = (event: any) =>
    setNewMessage(event.target.value)

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  const request = {
    room_id: roomId,
    text_message: newMessage,
    user_id: userId,
    is_read: false
  }
    if (!newMessage) return;

    socket.emit('sendMessage', {request});
    setNewMessage('')
  }

  useEffect(() => {
    const searchParams = {
      room: roomId,
      user: userId
    }
    socket.emit('join', searchParams)
  }, [])

  useEffect(() => {
    socket.on('messages', ({data}) => {
      setMessages(data)
    })
  }, [messages])

  socket.on('message', (response) => {
    setMessages((messages: MessagesType) => [...messages, response.data.messageCreate])
  })

  return(
    <div>
      <div className='flex flex-col h-[80vh] overflow-auto'>
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
        <div className='inline sticky'>
          <input
            type='text'
            name='inputMessage'
            placeholder='Написать сообщение'
            value={newMessage}
            onChange={inputHandler}
            required
          />
          <button onClick={buttonHandler}>Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default Messages;