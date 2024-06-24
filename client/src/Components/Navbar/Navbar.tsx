import { NavLink } from "react-router-dom"
import { AuthContext } from "../../main";
import { useContext } from "react";


const Navbar = (): JSX.Element => {
  const { authStore } = useContext(AuthContext)
  const token = localStorage.getItem('token')

  
  return (
    <nav>
      <div>
        <div>

          <div>
            <NavLink
              to='/'>
              Главная
            </NavLink>
          </div>

          <div>
            <NavLink
              to='/bid-list'>
              Список заявок
            </NavLink>
          </div>

          <div>
            <NavLink
              to='/profile'>
              Моя страница
            </NavLink>
          </div>

          <div>{
              token ? <NavLink
              to='/' onClick={() => authStore.logout()} >
              Выйти
            </NavLink> :
            <NavLink
              to='/login'>
              Войти
            </NavLink>
            }

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar