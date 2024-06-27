import ProfilePage from "./ProfilePage";
import { NavLink } from "react-router-dom";

function ProfileBidPage(): JSX.Element {

    return (
        <>
        <ProfilePage/>
        <NavLink to={"/profile/bid/active"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Активные заявки
          </button>
        </NavLink>

        <NavLink to={"/profile/bid/progress"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Заявки в работе
          </button>
        </NavLink>
        <NavLink to={"/profile/bid/closed"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Закрытые заявки
          </button>
        </NavLink>
      </>
    );
  }
  
  export default ProfileBidPage;
