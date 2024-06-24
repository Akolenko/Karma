import { NavLink } from "react-router-dom"


const Navbar = (): JSX.Element => {
  const activeLink = 'text-[#249C30]'
  const normalLink = 'text-[#515066] hover:text-[#51B85B] transition ease-in-out duration-100'
  
  return (
    <header className='sticky inset-x-0 bg-green-600 top-0 pt-5 pl-2 pr-2 pb-5'>
      <div className="bg-white rounded-full">
        <div className='mx-auto flex items-center justify-between p-4" aria-label="Global'>
          <div>

            <NavLink
              className='flex lg:flex-1 -m-1.5 p-1.5'
              to='/'>
              <img className='h-8 w-auto' src="/public/svg/Vector.svg" alt="logo"/>
            </NavLink>

          </div>
          <div className='items-center'>

            <button type='button'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink}
                to='/'>
                Главная
              </NavLink>
            </button>

            <button type='button'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink}
                to='/bid-list'>
                Список заявок
              </NavLink>
            </button>

            <button type='button'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink}
                to='/profile'>
                Моя страница
              </NavLink>
            </button>

          </div>
          <div>

            <button type='button'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink}
                to='/login'>
                Войти
              </NavLink>
            </button>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar