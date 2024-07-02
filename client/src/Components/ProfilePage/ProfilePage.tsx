import { NavLink } from "react-router-dom";

function ProfilePage(): JSX.Element {
  return (
    <div className='inset-x-0 top-0 pt-5 pl-2 pr-2 pb-5 px-10 z-10 text-[#515066] hover:text-[#51B85B] transition ease-in-out duration-100'>
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
      </div>

      <div></div>
    </div>
  );
}

export default ProfilePage;
