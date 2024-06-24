import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div className={'flex flex-wrap h-44 gap-5'}>
        <h1 className={'w-7/12 font-medium'}>Найдите исполнителя или <br/> станьте исполнителем сами</h1>
        <div className={''}>
          <img src={''} alt={'Здесь будет какая-нибудь картинка красивая'}/>
        </div>
        <div className={'flex mt-5'}>
          <Link to={'/bid-form'}>
            <button
              className={'focus:outline-none transition duration-300 w-80 mr-14 border-lime-600 hover:bg-lime-600' +
                ' hover:text-white bg-white text-lime-600 '}>
              Нужна помощь
            </button>
          </Link>
          <Link to={'/bids-list'}>
            <button
              className={'focus:outline-none transition duration-300 w-80 border-lime-600 hover:bg-lime-600' +
                ' hover:text-white bg-white text-lime-600'}>
              Хочу помочь
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}