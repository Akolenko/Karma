import axios from "axios";
import { useState, useEffect, Children } from "react";
import { NavLink } from "react-router-dom";

export type BioProfileType = {
  id?: number;
  fio: string;
  date_of_birth: any; //???
  email: string;
  password: string;
  phone: string;
};

function ProfilePage(): JSX.Element {
  const [user, setUser] = useState<BioProfileType[]>([]);

  useEffect(() => {
    const user = axios("http://localhost:3000/profile").then((res) =>
      setUser(res.data)
    );
  }, []);
  // console.log(user);

  return (
    <div className="mainConteiner">
      <h2 className="profile-page-title">МОЯ СТРАНИЦА</h2>

      <div className="profile-page-button">
        <NavLink to={"/profile/bio"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Мои данные
          </button>
        </NavLink>
        <NavLink to={"/profile/bid"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Мои заявки
          </button>
        </NavLink>
        <NavLink to={"/"}>
          <button
            className={
              "w-80 border-lime-600 hover:bg-lime-500 hover:text-white hover:border-none bg-white text-lime-600"
            }
          >
            Мои отклики
          </button>
        </NavLink>
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default ProfilePage;