import { FC, useContext, useState } from "react";
import { AuthContext } from "../main";
import { observer } from "mobx-react-lite";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { authStore } = useContext(AuthContext)


    return ( 
        <div>
        <input onChange={e => setEmail(e.target.value)}
        value={email} 
        type="text" 
        placeholder="email"/>

        <input onChange={e => setPassword(e.target.value)}
        value={password} 
        type="password" 
        placeholder="password"/>
        <button onClick={() => authStore.login(email, password)}>Войти</button>
        <button onClick={() => authStore.registration(email, password)}>Регистрация</button>
        </div>
     );
}
 
export default observer(LoginForm)