export default function SearchInput({...props}): JSX.Element {

  return (
    <div className={'flex flex-col justify-center mx-[300px] w-[300px] mb-10'}>
      <label htmlFor={'search'}>Введите ключевое слово:</label>
      <input id={'search'} name={'search'} {...props}
             type={'text'} placeholder={'Начните печатать здесь...'}
             className={'p-1.5 shadow-sm rounded-md block w-full border-0 py-1.5 pl-4' +
               ' pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 ' +
               'focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'}/>
    </div>
  )
}