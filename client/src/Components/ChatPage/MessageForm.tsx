import {useAppDispatch} from "../../../hooks/redux.ts";
import {useState} from "react";
import {roomId} from "./Messages.tsx";

function MessageForm({roomId}: roomId): JSX.Element {
  const [message, setMessage] = useState({roomId, text: ''});
  const dispatch = useAppDispatch();
  // console.log(message)

    return(
      <div>
        <input type='text' placeholder='Написать сообщение' onChange={(e) => message.text = e.target.value}/>
        <button onClick={() => dispatch(message)}>Отправить</button>
      </div>
    )
  }
  
  export default MessageForm;