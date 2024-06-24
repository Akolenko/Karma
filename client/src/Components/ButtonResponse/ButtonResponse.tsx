export default function ButtonResponse({handleRespond} : {handleRespond: ()=>void}) {
  return (
    <button onClick={handleRespond}
            className={'focus:outline-none size-26 text-sm transition duration-300 mt-3 rounded-md' +
              ' shadow-sm border-lime-600 hover:bg-lime-600 hover:text-white' +
              ' hover:border-lime-600 bg-white text-lime-600'}>Откликнуться</button>
  )
}