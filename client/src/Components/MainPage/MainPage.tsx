import { Link } from "react-router-dom";
import './MainPage.styles.css'

export default function MainPage() {


  return (
    <>
      <div className={'start-el'}>
        <div className={' flex flex-wrap h-44 gap-5 px-10 mt-[150px] ml-[200px]'}>
          <h1 className={'w-7/12 font-medium'}>
            KARMA <br/>
            Найдите исполнителя или <br/>
            станьте исполнителем сами</h1>
          <div className={'w-1/4'}>
            <img src={'./img/main_img.png'} alt={'Здесь будет какая-нибудь картинка красивая'}/>
          </div>
          <div className={'flex'}>
            <Link to={'/bid-form'}>
              <button
                className={'focus:outline-none transition' +
                  ' duration-300 w-80 mr-14 hover:bg-lime-600' +
                  ' hover:text-white bg-white text-lime-600 shadow-md'}>
                Нужна помощь
              </button>
            </Link>
            <Link to={'/bids-list'}>
              <button
                className={'focus:outline-none transition duration-300 ' +
                  'w-80 border-lime-600 hover:bg-lime-600' +
                  ' hover:text-white bg-white text-lime-600 shadow-md'}>
                Хочу помочь
              </button>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}