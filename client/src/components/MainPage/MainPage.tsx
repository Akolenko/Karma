import { Link } from "react-router-dom";
import "./MainPage.styles.css";
import { Cards } from "../UI/UserCard/Card.tsx";

export default function MainPage() {
  return (
    <>
      <div className={"start-el flex flex-wrap justify-center"}>
        <div className={"flex items-center flex-col gap-y-4"}>
          <div className={""}>
            <img className='w-72' src='/svg/logo2.svg' alt='main-logo' />
            <span className='font-normal text-gray-600 tracking-wide'>
              Сервис, объединяющий людей через добрые дела.
              <br />
              Оказывайте безвозмедную помощь и зарабатывайте КАРМУ!
            </span>
            <div className={"mt-5"}>
              <span className={"text-6xl font-medium text-blue-700"}>
                Найдите исполнителя или <br />
                станьте исполнителем сами
              </span>
            </div>
          </div>
          <div></div>
          <div className={"flex justify-center gap-x-28"}>
            <Link to={"/bid-form"}>
              <button
                className={
                  "focus:outline-none transition" +
                  " duration-300 w-80 mr-14 hover:bg-green-600" +
                  " hover:text-white bg-white text-green-600 shadow-md"
                }
              >
                Нужна помощь
              </button>
            </Link>
            <Link to={"/bids-list"}>
              <button
                className={
                  "focus:outline-none transition duration-300 " +
                  "w-80 border-green-600 hover:bg-green-600" +
                  " hover:text-white bg-white text-green-600 shadow-md"
                }
              >
                Хочу помочь
              </button>
            </Link>
          </div>
        </div>
        <div className={"w-1/4"}>
          <img
            src={"./img/main_img.png"}
            alt={"Здесь будет какая-нибудь картинка красивая"}
          />
        </div>
        <Cards />
      </div>
    </>
  );
}
