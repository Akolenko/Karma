import {useAppDispatch} from "../../../hooks/redux.ts";
import {useState} from "react";
import {roomId} from "./Messages.tsx";

function MessageForm({roomId}: roomId): JSX.Element {
  const [message, setMessage] = useState({roomId, text: ''});
  const dispatch = useAppDispatch();
  // console.log(message)

    return(
      <div>
        <input
          type='text'
          name='inputMessage'
          placeholder='Написать сообщение'
          // onChange={inputHandler}
          required
        />
        <button onClick={() => dispatch(message)}>Отправить</button>
      </div>
    )
  }
  
  export default MessageForm;