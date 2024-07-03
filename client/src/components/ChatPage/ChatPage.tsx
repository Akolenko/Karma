import UsersBar from "./UsersBar";


function ChatPage(): JSX.Element {
  return(
    <div
    className='flex justify-center w-[100vw]'>
      <div
        className='flex flex-col h-[85vh]'
      >
        <div
          className='pl-2.5'
        >Список чатов</div>
        <UsersBar/>
      </div>
    </div>
  )
}

export default ChatPage;