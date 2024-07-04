export default function SearchInput({ ...props }): JSX.Element {
  return (
    <div className={"flex flex-col justify-center w-[350px]"}>
      <label htmlFor={"search"}>Введите ключевое слово:</label>
      <input
        id={"search"}
        name={"search"}
        {...props}
        type={"text"}
        placeholder={"Начните печатать здесь..."}
        className={
          "p-1.5 shadow-sm rounded-md block w-full border-0 py-1.5 pl-4" +
          " pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 " +
          "focus:ring-inset sm:text-sm sm:leading-6 h-10 outline-lime-500"
        }
      />
    </div>
  );
}
