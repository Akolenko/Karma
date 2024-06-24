import { FC, useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { AuthContext } from "../../main";

// eslint-disable-next-line react-refresh/only-export-components
const RegisterForm: FC = () => {
    const [name, setName] = useState<string>('')
    const [dateOfBirth, setDateOfBirth] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
// фио, дата рождения, имейл, пароль, телефон
    const { authStore } = useContext(AuthContext)


    return ( 
        <div>
            <div className="FIO">
                <input onChange={e => setName(e.target.value)}
                value={name} 
                type="text" 
                placeholder="ФИО"/> 
            </div>

            <div className="date-of-birth">
                <input onChange={e => setDateOfBirth(e.target.value)}
                value={dateOfBirth} 
                type="date" 
                placeholder="ФИО"/> 
            </div>

            <div className="email">
                <input onChange={e => setEmail(e.target.value)}
                value={email} 
                type="text" 
                placeholder="email"/>  
            </div>

            <div className="password">
                <input onChange={e => setPassword(e.target.value)}
                value={password} 
                type="password" 
                placeholder="password"/>
            </div>

            <div className="phone">
                <input onChange={e => setPhone(e.target.value)}
                value={phone} 
                type="tel"
                placeholder="phone"/>
            </div>




        <button onClick={() => authStore.registration(name, dateOfBirth, email, password, phone)}>Регистрация</button>
        </div>
     );
}
 
// eslint-disable-next-line react-refresh/only-export-components
export default observer(RegisterForm)