import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

const URL = "http://localhost:3000";

interface Form {
  title: string,
  description: string,
  address: string,
}

export default function BidForm() {
  const {register, handleSubmit} = useForm<Form>()
  const submit: SubmitHandler<Form> = function (data) {
    axios.post(URL + '/api/bids', data)
      .then(response => {
        console.log(response.data)
      })
      .then(() => {
        alert('Заявка на помощь успешно отправлена!')
      })
      .catch(error => console.log(error.message, "нет backend'a"))
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className={'flex flex-col bg-gray-200 p-6 w-80 rounded-xl gap-2'}>
        <label>Название заявки</label>
        <input placeholder={'Введите название'}
               type={'text'} {...register('title', {required: true})} className={'p-2 rounded-xl'}/>
        <label className={'mt-2'}>Опишите Вашу проблему:</label>
        <textarea spellCheck={"true"} rows={10} placeholder={'Текст проблемы'}
                  {...register('description', {required: true})} className={'p-2 rounded-xl'}/>
        <label className={'mt-2'}>Адрес</label>
        <input placeholder={'Введите адрес по которому необходимо оказать помощь'}
               type={'text'} {...register('address', {required: true})} className={'p-2 rounded-xl'}/>
        <button className={'mt-3 bg-blue-300'}>Создать заявку
        </button>
      </form>
    </>
  )

}