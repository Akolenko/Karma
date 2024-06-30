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
      <div className='flex flex-col h-[80vh] w-[50vw] overflow-auto bg-white rounded-lg p-2.5'>
        {
          messages && messages.length ?
            messages.map((message: MessageType) => {
              return (
                <>
                  {
                    message.user_id === Number(userId) ?
                      <div
                        key={message.id}
                        className='m-2.5'
                      >
                        <div
                          className='flex justify-end bg-gray-400 w-[70w]'
                        >
                          {message.text_message}
                        </div>
                      </div>
                      :
                      <div
                        key={message.id}
                        className='m-2.5'
                      >
                        <div
                          className='flex bg-green-500 justify-start'
                        >
                          {message.text_message}
                        </div>
                      </div>
                  }
                </>
              )
            })
            :
            <div>Нет сообщений</div>
        }
      </div>
      <div className='flex'>
        <input
          className='rounded-lg w-[40vw] m-2.5 h-10'
          type='text'
          name='inputMessage'
          placeholder='Написать сообщение'
          value={newMessage}
          onChange={inputHandler}
          required
        />
        <button
          className='rounded-md bg-lime-600 text-white p-1.5 text-left hover:scale-105 transition duration-300 cursor-pointer m-2.5'
          onClick={buttonHandler}
        >
          Отправить
        </button>
      </div>
    </div>
  )
}

export default Messages;