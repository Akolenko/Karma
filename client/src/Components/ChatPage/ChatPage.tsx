import UsersBar from "./UsersBar";


function ChatPage(): JSX.Element {
  return(
    <div
      className='flex flex-col w-3/4 h-[85vh]'
    >
      <div>Список чатов</div>
      <UsersBar/>
    </div>
  )
}

export default ChatPage;