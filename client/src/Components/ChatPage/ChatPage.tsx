import MessageForm from "./MessageForm";
import UsersBar from "./UsersBar";


function ChatPage(): JSX.Element {
  return(
    <>
      <div>Чат паге</div>
      <UsersBar/>
      <MessageForm/>
    </>
  )
}

export default ChatPage;