import MessageForm from "./MessageForm";
import Messages from "./Messages";
import UsersBar from "./UsersBar";


function ChatPage(): JSX.Element {
  return(
    <>
      <div>Чат паге</div>
      <UsersBar/>
      <Messages/>
      <MessageForm/>
    </>
  )
}

export default ChatPage;