import { FC, useContext, useState } from "react";
import { AuthContext } from "../main";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
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

        
        <button onClick={() => authStore.login(email, password)}>
        <NavLink
            to='/'>
            Войти
        </NavLink>
        </button>

        <button>
        <NavLink
            to='/register'>
            Создать акаунт
        </NavLink>
        </button>

        </div>
     );
}
 
// eslint-disable-next-line react-refresh/only-export-components
export default observer(LoginForm)