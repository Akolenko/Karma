import axios from "axios";
import { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../features/userEditProfileSlice";
import {setTotalOrders, setCompletedOrders, getOrders } from "../../../features/userActivitySlice.ts"
import { Paper, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { RootState } from "../../../redux/store/store.ts";
import {Chart, ArcElement, registerables } from 'chart.js'
import 'chartjs-plugin-datalabels'
Chart.register(ArcElement, ...registerables )

export interface BioProfileType {
  id?: number;
  fio: string;
  date_of_birth: Date; //???
  email: string;
  password: string;
  phone: string;
}

export type UserDataType = {
  fio: string;
  email: string;
  phone: string;
  userId?: string | null;
};

// type UserData = keyof BioProfileType;

function ProfileBioPage(): JSX.Element {
  const [user, setUser] = useState<BioProfileType>({} as BioProfileType);
  const userId = localStorage.getItem("userId");

  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

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
      body: JSON.stringify({fio, email, phone, userId}),
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

  const handleUpdateUser = (): void => {
    const {fio, email, phone} = user as BioProfileType;
    dispatch(updateUser({fio, email, phone}));
    saveUserDataToBackend({fio, email, phone, userId});
    setIsEditing(false);
  };

  const handleUser = (name: string, type: any): void => {
    const temp = {...user, [`${type}`]: name} as BioProfileType;
    // temp[type] = name;
    setUser(temp);
  };

  useEffect(() => {
    axios(`${import.meta.env.VITE_REACT_APP_API_URL}/profile`, {
      params: {userId},
    }).then((res) => setUser(res.data));

    dispatch(getOrders(userId))
    
  }, []);


  const totalOrders = useSelector((state:RootState) => state.activity.totalOrders);
  const completedOrders = useSelector((state:RootState) => state.activity.completedOrders);

  const data = {
    labels: ["Выполненные заказы", "Опубликованные заказы"],
    datasets: [
      {
        // label: ["Выполненные заказы", "Опубликованные заказы"],
        data: [completedOrders, totalOrders],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        // display: true, 
        formatter: (value:any, context:any) => { // определяем кастомный форматтер
          if (context.dataset.data[0] > context.dataset.data[1]) {
            return "Ты деятель";
          } else {
            return "Ты проситель";
          }
        },
        align: 'center',
        anchor: 'center',
        color: 'black',
        font: {
          weight: 'bold',
          size: 16
        }
      },
    },
  };


  return (
    <>
      <ProfilePage/>

      <div className={"flex flex-col"}>
        <div className={"flex flex-row"}>
          <img
            className={"object-cover h-60 w-96 my-20"}
            src="https://adindex.ru/files2/news/2019_07/273997_inkognito.jpg?ts="
            alt="pic"
          />
          {
            <div>
              <Paper elevation={3} variant="outlined" sx={{p: 2}}>
                <Typography variant="h6" gutterBottom>
                  Диаграмма Вашей активности 
                </Typography>
                <Doughnut data={data} options={options} />
              </Paper>
            </div>}
        </div>

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
                    type="text"
                    placeholder={"Ваше ФИО"}
                    value={user ? user.fio : ""}
                    onChange={(e) => handleUser(e.target.value, "fio")}
                  />
                  <input
                    className={
                      "font-extrabold text-xl col-start-1 col-end-3 flex-1 flex flex-row m-3 w-96"
                    }
                    type="text"
                    value={user ? user.email : ""}
                    placeholder={"email"}
                    onChange={(e) => handleUser(e.target.value, "email")}
                  />
                  <input
                    className={
                      "font-extrabold text-xl col-start-1 col-end-3 flex-1 flex flex-row m-3 w-96"
                    }
                    type="text"
                    placeholder={user.phone || "номер телефона"}
                    value={user ? user.phone : ""}
                    onChange={(e) => handleUser(e.target.value, "phone")}
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
