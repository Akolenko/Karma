import { SubmitHandler, useForm } from "react-hook-form";

interface Form {
  title:string,
  description:string,
  adress:string,
}

export default function BidForm() {
  const {register, handleSubmit} = useForm<Form>()
  const submit:SubmitHandler<Form> = function (data) {
    console.log(data)
  }


  return (
    <form onSubmit={handleSubmit(submit)}>
      <label>Название заявки</label>
      <input type={'text'} {...register('title')}/>
      <label>Опишите Вашу проблему:</label>
      <input type={'text'} {...register('description')}/>
      <label>Адрес</label>
      <input type={'text'} {...register('adress')}/>
      <button>Создать заявку</button>
    </form>
  )

}