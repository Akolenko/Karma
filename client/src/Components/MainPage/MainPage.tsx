export default function MainPage() {
  return (
    <>
      <div className={'flex flex-wrap h-44 gap-5'}>
        <h1 className={'w-7/12 font-medium'}>Найдите исполнителя или <br/> станьте исполнителем сами</h1>
        <div className={''}>
          <img src={''} alt={'Здесь будет какая-нибудь картинка красивая'}/>
        </div>
        <div className={'flex mt-5'}>
          <button className={'w-80 mr-14 border-lime-600 hover:border-lime-500 bg-white text-lime-600'}>
            Нужна помощь
          </button>
          <button className={'w-80 border-lime-600 hover:border-lime-500 bg-white text-lime-600'}>
            Хочу помочь
          </button>
        </div>
      </div>

    </>
  )
}