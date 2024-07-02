import { NavLink } from "react-router-dom";

function ProfilePage(): JSX.Element {
  return (
    <div className='mainConteiner'>
      <h2 className='profile-page-title'>МОЯ СТРАНИЦА</h2>

      <div className='profile-page-button'>
        <NavLink to={"/profile/bio"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Мои данные
          </button>
        </NavLink>
        <NavLink to={"/profile/bid/active"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Мои заявки
          </button>
        </NavLink>
        <NavLink to={"/profile/responses"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Мои отклики
          </button>
        </NavLink>
        <NavLink to={"/certificates"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Потратить очки
          </button>
        </NavLink>
      </div>

      <div></div>
    </div>
  );
}

export default ProfilePage;
