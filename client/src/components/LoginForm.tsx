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
    <>

      <div className={'drop-shadow-md flex flex-col bg-white p-6 w-96 rounded-xl gap-2 mt-12 mx-[auto] '}>

        <label className="text-sm font-medium tracking-wide leading-8 text-gray-900" htmlFor={'title'}>Введите Ваш email:</label>
        <input id={'title'} placeholder={'email'} type={'text'}
               className={'p-2 rounded-xl shadow-sm outline-gray-100 border border-gray-200'}
               onChange={e => setEmail(e.target.value)}
               value={email}
        />



        <label htmlFor={'address'}
               className={'text-sm font-medium tracking-wide leading-8 text-gray-900 mt-2'}>Введите пароль:</label>
        <input id={'address'} placeholder={'Пароль'}
               type={'password'}
               className={'outline-gray-100 border-gray-200 p-2 rounded-xl shadow-sm outline-none'}
               onChange={e => setPassword(e.target.value)}
               value={password}
        />


        <button className={'transition duration-300 mt-3 rounded-md' +
          ' shadow-sm border-lime-600 hover:bg-lime-600 hover:text-white' +
          ' hover:border-lime-600 bg-white text-lime-600'}
                onClick={() => authStore.login(email, password)}>
          <NavLink
            to='/'>
            Войти
          </NavLink>

        </button>

        <button className={'transition duration-300 mt-3 rounded-md' +
          ' shadow-sm border-lime-600 hover:bg-lime-600 hover:text-white' +
          ' hover:border-lime-600 bg-white text-lime-600'}>
          <NavLink
            to='/register'>
            Создать акаунт
          </NavLink>
        </button>

      </div>
    </>

  )


  // return (
  //     <div className="login-form">

  //         <div className="enter-email">
  //             <h3>Введите Ваш email</h3>
  //     <input onChange={e => setEmail(e.target.value)}
  //     value={email}
  //     type="text"
  //     placeholder="email"/>
  //         </div>


  //     <div className="enter-password">
  //     <h3>Введите Ваш пароль</h3>
  //     <input onChange={e => setPassword(e.target.value)}
  //     value={password}
  //     type="password"
  //     placeholder="password"/>
  //     </div>



  // <div className="enter">
  // <button onClick={() => authStore.login(email, password)} >
  // <NavLink
  //     to='/'>
  //     Войти
  // </NavLink>
  // </button>
  // </div>


  //     <button className={'transition duration-300 mt-3 rounded-md' +
  //       ' shadow-sm border-lime-600 hover:bg-lime-600 hover:text-white' +
  //       ' hover:border-lime-600 bg-white text-lime-600'}>
  //     <NavLink
  //         to='/register'>
  //         Создать акаунт
  //     </NavLink>
  //     </button>

  //     </div>
  //  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default observer(LoginForm)