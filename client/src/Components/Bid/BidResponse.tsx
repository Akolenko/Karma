
export default function BidResponse({response}) {

  return (
    <>
      <div className={'rounded-md bg-white p-3 text-left hover:scale-105 transition duration-300 pl-8'}>
        <h3 className={'text-lg font-semibold tracking-wide leading-8'}>{response.title}</h3>
        <div className={'flex gap-x-2'}>
          <img className={'w-4'} src={'/svg/Vector.svg'} alt='logo'/>
          <p className={'text-sm font-sans tracking-wide leading-8 text-gray-500'}>{response.address}</p>
        </div>
        <div className={'flex justify-between items-baseline -mt-2'}>
          <p className={'font-serif'}>{'Вытяните имя заказчика из базы :)'}</p>
          <button>Позвонить</button>
          <button>Начать чат</button>
          <button>Отказаться от помощи</button>
        </div>
      </div>
    </>
  )
}
