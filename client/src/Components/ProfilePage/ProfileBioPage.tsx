import axios from "axios";
import { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";

export type BioProfileType = {
    id?: number,
    fio:string,
    date_of_birth: Date, //???
    email:string,
    password:string,
    phone:string
}

function ProfileBioPage(): JSX.Element {
    const [user, setUser] = useState<BioProfileType | null> (null);

    useEffect(() => {
        axios(`${import.meta.env.VITE_REACT_APP_API_URL}/profile`)
        .then((res) => setUser(res.data));
    }, []);


    return (
        <>
        <ProfilePage/>

      <div className={"flex flex-col"}>
        <img className={'object-cover h-60 w-96 my-20'} src="https://adindex.ru/files2/news/2019_07/273997_inkognito.jpg?ts=" alt="pic"/>
        {
          user && 
          <>
            <div className={'font-extrabold text-xl col-start-1 col-end-3 flex-1'}>{user.fio}</div>
            <div className={'font-extrabold'}>{user.email}</div>
            <div className={'font-extrabold'}>{user.phone}</div>
          </>
        }

      </div>

        </>
    );
  }

  export default ProfileBioPage;
  