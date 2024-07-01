import axios from "axios";
import { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import { useSelector } from "react-redux";
import { updateUser } from "../../../features/userEditProfileSlice";
import { getOrders } from "../../../features/userActivitySlice.ts"
import { Paper, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { RootState } from "../../../redux/store/store.ts";
import { Chart, ArcElement, registerables, ChartOptions, Plugin, ChartType } from 'chart.js'
import 'chartjs-plugin-datalabels'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useAppDispatch } from "../../../hooks/redux.ts";

Chart.register(ArcElement, ...registerables, ChartDataLabels)

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

declare module 'chart.js' {
  interface PluginOptionsByType<TType extends ChartType> {
    centerText?: {
      display: boolean;
      text: string;
    };
  }
}

// type UserData = keyof BioProfileType;

function ProfileBioPage(): JSX.Element {
  const [user, setUser] = useState<BioProfileType>({} as BioProfileType);
  const userId = localStorage.getItem("userId");

  const dispatch = useAppDispatch();
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

  const handleUser = (name: string, type: keyof BioProfileType): void => {
    const temp = {...user, [`${type}`]: name} as BioProfileType;
    // temp[type] = name;
    setUser(temp);
  };

  const totalOrders = useSelector((state: RootState) => state.activity.totalOrders);
  const completedOrders = useSelector((state: RootState) => state.activity.completedOrders);

  const data = {
    labels: ["Активные заказы", "Опубликованные заказы"],
    datasets: [
      {
        data: [completedOrders, totalOrders],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const centerTextPlugin: Plugin<'doughnut'> = {
    id: 'centerText',
    beforeDraw: (chart) => {
      if (
        chart.config &&
        chart.config.options &&
        chart.config.options.plugins &&
        chart.config.options.plugins.centerText &&
        chart.config.options.plugins.centerText.display
      ) {
        drawCenterText(chart);
      }
    },
  };
  const drawCenterText = (chart: any) => {
    const width = chart.width;
    const height = chart.height;
    const ctx = chart.ctx;
    ctx.restore();
    const fontSize = (height / 280).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = 'middle';
    const text = chart.config.options.plugins.centerText.text;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2.5;
    ctx.fillText(text, textX, textY);
    ctx.save();
  };
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      datalabels: {
        // display: true, 
        formatter: (value:any, context:any) => { // определяем кастомный форматтер
          console.log(value)
          if (context.dataset.data[0] > context.dataset.data[1]) {
            return "Ты деятель";
          } else {
            return "Ты проситель";
          }
        },

        display: true,
        align: 'center',
        anchor: 'center',
        color: 'black',
        font: {
          weight: 'bold',
          size: 16
        },
        offset: 0
      },
      centerText: {
        display: true,
        text: completedOrders > totalOrders ? "Ты деятель" : "Ты проситель",
      }
    },

  };
  useEffect(() => {
    axios(`${import.meta.env.VITE_REACT_APP_API_URL}/profile`, {
      params: {userId},
    }).then((res) => setUser(res.data));

    dispatch(getOrders(userId))

  }, []);
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
              <Paper elevation={0} variant="outlined" sx={{p: 3}}>
                <Typography variant="h6" gutterBottom>
                  Диаграмма Вашей активности
                </Typography>
                <Doughnut data={data} options={options} plugins={[centerTextPlugin]}/>
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
