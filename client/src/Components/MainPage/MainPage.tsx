import { Link } from "react-router-dom";
import "./MainPage.styles.css";
import { Cards } from "../UI/UserCard/Card.tsx";

export default function MainPage() {
  return (
    <>
      <div className={"start-el flex flex-wrap justify-center"}>
        <div className={"flex mt-12 items-center flex-col gap-y-4"}>
          <div className={"font-medium"}>
            <h1>
              <span className={"text-red-400"}>KARMA</span>
            </h1>
            <span>сервис, который....</span>
            <div className={"mt-12"}>
              <span className={"text-4xl"}>
                Найдите исполнителя или <br />
                станьте исполнителем сами
              </span>
            </div>
          </div>
          <div></div>
          <div className={"flex justify-center"}>
            <Link to={"/bid-form"}>
              <button
                className={
                  "focus:outline-none transition" +
                  " duration-300 w-56 mr-14 hover:bg-green-600" +
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
                  "w-56 border-green-600 hover:bg-green-600" +
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
