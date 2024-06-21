import { NavLink } from "react-router-dom"


const Navbar = (): JSX.Element => {
  
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

          <div>
            <NavLink
              to='/login'>
              Войти
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar