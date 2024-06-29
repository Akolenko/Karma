import axios from "axios";
import { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../features/userEditProfileSlice";

export type BioProfileType = {
  id?: number;
  fio: string;
  date_of_birth: Date; //???
  email: string;
  password: string;
  phone: string;
};

export type UserDataType = {
  fio: string;
  email: string;
  phone: string;
  userId?: string | null;
};

function ProfileBioPage(): JSX.Element {
  const [user, setUser] = useState<BioProfileType | null>(null);
  const userId = localStorage.getItem("userId");

  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [fio, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const saveUserDataToBackend = ({
    fio,
    email,
    phone,
    userId,
  }: UserDataType) => {
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/profile/date`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fio, email, phone, userId }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Данные успешно сохранены на сервере");
        } else {
          console.error("Ошибка при сохранении данных на сервере");
        }
      })
      .catch((error) => {
        console.error("Произошла ошибка при отправке данных на сервер:", error);
      });
  };

  const handleUpdateUser = () => {
    dispatch(updateUser({ fio, email, phone }));
    saveUserDataToBackend({ fio, email, phone, userId });
    window.location.assign("/profile/bio");
  };

  useEffect(() => {
    axios(`${import.meta.env.VITE_REACT_APP_API_URL}/profile`, {
      params: { userId },
    }).then((res) => setUser(res.data));
  }, []);

  return (
    <>
      <ProfilePage />

      <div className={"flex flex-col"}>
        <img
          className={"object-cover h-60 w-96 my-20"}
          src='https://adindex.ru/files2/news/2019_07/273997_inkognito.jpg?ts='
          alt='pic'
        />
        {user && (
          <>
            <div
              className={
                "font-extrabold text-xl col-start-1 col-end-3 flex-1 flex flex-col"
              }
            >
              {isEditing ? (
                <div>
                  <input
                    className={
                      "font-extrabold text-xl col-start-1 col-end-3 flex-1 m-3 w-96"
                    }
                    type='text'
                    placeholder={user.fio || "Ваше ФИО"}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className={
                      "font-extrabold text-xl col-start-1 col-end-3 flex-1 flex flex-row m-3 w-96"
                    }
                    type='text'
                    placeholder={user.email || "email"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className={
                      "font-extrabold text-xl col-start-1 col-end-3 flex-1 flex flex-row m-3 w-96"
                    }
                    type='text'
                    placeholder={user.phone || "номер телефона"}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <button
                    className={
                      "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                    }
                    onClick={handleUpdateUser}
                  >
                    Сохранить
                  </button>
                </div>
              ) : (
                <>
                  <div
                    className={
                      "font-extrabold text-xl col-start-1 col-end-3 flex-1 m-3"
                    }
                  >
                    {user.fio}
                  </div>
                  <div
                    className={
                      "font-extrabold text-xl col-start-1 col-end-3 flex-1 flex flex-row m-3"
                    }
                  >
                    {user.email}
                  </div>
                  <div
                    className={
                      "font-extrabold text-xl col-start-1 col-end-3 flex-1 flex flex-row m-3"
                    }
                  >
                    {user.phone}
                  </div>
                  <button
                    className={
                      "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                    }
                    onClick={() => setIsEditing(true)}
                  >
                    Редактировать профиль
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ProfileBioPage;
