import axios from "axios";
import { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import { useSelector } from "react-redux";
import { updateUser } from "../../../features/userEditProfileSlice";
import { getOrders } from "../../../features/userActivitySlice.ts";
import { Doughnut } from "react-chartjs-2";
import { RootState } from "../../../redux/store/store.ts";
import {
  Chart,
  ArcElement,
  registerables,
  ChartOptions,
  Plugin,
  ChartType,
} from "chart.js";
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useAppDispatch } from "../../../hooks/redux.ts";

Chart.register(ArcElement, ...registerables, ChartDataLabels);

export interface BioProfileType {
  id?: number;
  fio: string;
  date_of_birth: Date; //???
  email: string;
  password: string;
  phone: string;
  scores: number;
}

export type UserDataType = {
  fio: string;
  email: string;
  phone: string;
  userId?: string | null;
};

declare module "chart.js" {
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

  const handleUpdateUser = (): void => {
    const { fio, email, phone } = user as BioProfileType;
    dispatch(updateUser({ fio, email, phone }));
    saveUserDataToBackend({ fio, email, phone, userId });
    setIsEditing(false);
  };

  const handleUser = (name: string, type: keyof BioProfileType): void => {
    const temp = { ...user, [`${type}`]: name } as BioProfileType;
    // temp[type] = name;
    setUser(temp);
  };

  const totalOrders = useSelector(
    (state: RootState) => state.activity.totalOrders
  );
  const completedOrders = useSelector(
    (state: RootState) => state.activity.completedOrders
  );

  const data = {
    labels: ["Активные заказы", "Опубликованные заказы"],
    datasets: [
      {
        data: [completedOrders, totalOrders],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  
  const centerTextPlugin: Plugin<"doughnut"> = {
    id: "centerText",
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
    ctx.textBaseline = "middle";
    const text = chart.config.options.plugins.centerText.text;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2.5;
    ctx.fillText(text, textX, textY);
    ctx.save();
  };
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      datalabels: {
        display: completedOrders > 0 && totalOrders > 0,
        align: "center",
        anchor: "center",
        color: "black",
        font: {
          weight: "bold",
          size: 16,
        },
        offset: 0,
      },
      centerText: {
        display: completedOrders > 0 && totalOrders > 0,
        text: completedOrders > totalOrders ? "Ты деятель" : "Ты проситель",
      },
    },
  };
  useEffect(() => {
    axios(`${import.meta.env.VITE_REACT_APP_API_URL}/profile`, {
      params: { userId },
    }).then((res) => setUser(res.data));

    dispatch(getOrders(userId));
  }, []);
  return (
    <>
      <ProfilePage />
      <div className={"flex flex-row items-center justify-center mt-6 space-x-28 h-[70vh]"}>
        <div
          className={
            "border mt-6 border-green-950 rounded-md shadow-lg p-4 flex flex-col items-center h-100 w-96"
          }
        >
          <img
            className={"block mx-auto h-64 rounded-full sm:mx-0 sm:shrink-0 transition duration-300 ease-in-out transform hover:scale-110"}
            src="/public/img/profilFoto.png"
            alt="pic"
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
                    <div className="grid gap-4">
                      <label
                        htmlFor="fio"
                        className="text-xl font-bold text-green-700"
                      >
                        ФИО:
                      </label>
                      <input
                        id="fio"
                        className="font-extrabold text-xl col-start-1 col-end-3 flex-1 flex flex-row m-1 w-80 bg-green-200 border-2 border-green-500 rounded-lg py-2 px-4 focus:outline-none focus:bg-white focus:border-green-700 hover:bg-green-100 hover:border-green-700 transition duration-300"
                        type="text"
                        placeholder="Ваше ФИО"
                        value={user ? user.fio : ""}
                        onChange={(e) => handleUser(e.target.value, "fio")}
                      />

                      <label
                        htmlFor="email"
                        className="text-xl font-bold text-green-700"
                      >
                        Email:
                      </label>
                      <input
                        id="email"
                        className="font-extrabold text-xl col-start-1 col-end-3 flex-1 flex flex-row m-1 w-80 bg-green-200 border-2 border-green-500 rounded-lg py-2 px-4 focus:outline-none focus:bg-white focus:border-green-700 hover:bg-green-100 hover:border-green-700 transition duration-300"
                        type="text"
                        placeholder="email"
                        value={user ? user.email : ""}
                        onChange={(e) => handleUser(e.target.value, "email")}
                      />

                      <label
                        htmlFor="phone"
                        className={"text-xl font-bold text-green-700"}
                      >
                        Номер телефона:
                      </label>
                      <input
                        id="phone"
                        className="font-extrabold text-xl col-start-1 col-end-3 flex-1 flex flex-row m-2 w-80 bg-green-200 border-2 border-green-500 rounded-lg py-2 px-4 focus:outline-none focus:bg-white focus:border-green-700 hover:bg-green-100 hover:border-green-700 transition duration-300"
                        type="text"
                        placeholder={user.phone || "номер телефона"}
                        value={user ? user.phone : ""}
                        onChange={(e) => handleUser(e.target.value, "phone")}
                      />
                    </div>
                    <button
                      className={
                        "m-2 text-xl font-bold hover:scale-110 transition duration-300 ease-in-out transform bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-80 rounded-lg py-2 px-4 focus:outline-none"
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
                        "text-xl font-bold m-1 hover:scale-110 transition duration-300 ease-in-out transform bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
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

        <div className={"flex flex-col items-center"}>
          <img
            className={"object-cover h-64 scale-y-50 scale-x-50"}
            src="https://cdn-icons-png.flaticon.com/512/9830/9830777.png"
            alt="pic"
          />
          <div className="text-green-800 p-0 font-bold text-3xl p-4 rounded-lg flex flex-col items-center">
            {user ? user.scores : ""}
          </div>
          <div className="text-xl font-bold text-green-700">Очки Вашей кармы</div>
        </div>

        {
          <div className="ml-8">
            
              <h2 className="text-2xl font-bold mb-4">
                Диаграмма Вашей активности
              </h2>
              <Doughnut
                data={data}
                options={options}
                plugins={[centerTextPlugin]}
              />
            
          </div>
        }
      </div>
    </>
  );
}

export default ProfileBioPage;
