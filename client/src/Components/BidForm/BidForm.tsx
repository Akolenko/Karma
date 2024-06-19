import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { JSX, useState } from "react";

interface Form {
  title: string,
  description: string,
  address: string,
}


export default function BidForm(): JSX.Element {
  const {register, handleSubmit, formState: {isSubmitting, errors}, reset} = useForm<Form>()

  const [submitSuccess, setSubmitSuccess] = useState(false);


  const submit: SubmitHandler<Form> = function (data) {

    axios.post(`http://localhost:3000/api/bids`, data)
      .then(response => {
        console.log(response.data)
        reset()
        setSubmitSuccess(true)
      })
      .catch(error => console.log(error.message, "нет backend"))
  }
  const handlePopupClose = () => {
    setSubmitSuccess(false);
    window.location.assign('/bid-list');
    // пока перенаправляю заказчиков на страницу всех заявок
  };

  return (
    <>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Создание Вашей
        заявки</h2>
      <form onSubmit={handleSubmit(submit)}
            className={'drop-shadow-md flex flex-col bg-white p-6 w-96 rounded-xl gap-2 m-8 '}>

        <label className="text-sm font-medium tracking-wide leading-8 text-gray-900" htmlFor={'title'}>Название
          заявки</label>
        <input id={'title'} placeholder={'Введите название'}
               type={'text'} {...register('title', {
          required: 'Введите название заявки! (Не менее 5 символов)', minLength: {
            value: 5,
            message: 'Не менее 5 символов!'
          }
        })}
               className={'p-2 rounded-xl shadow-sm outline-gray-100 border border-gray-200'}/>
        {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}

        <label htmlFor={'description'} className={'text-sm font-medium tracking-wide leading-8 text-gray-900 mt-2'}>Опишите
          Вашу проблему:</label>
        <textarea id={'description'} spellCheck={"true"} rows={10} placeholder={'Текст проблемы'}
                  {...register('description', {
                    required: 'Введите текст проблемы! (Не менее 10 символов)',
                    minLength: {
                      value: 10,
                      message: 'Не менее 10 символов!'
                    }
                  })}
                  className={'outline-gray-100 border-gray-200 p-2 rounded-xl shadow-sm outline-none italic'}/>
        {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}

        <label htmlFor={'address'}
               className={'text-sm font-medium tracking-wide leading-8 text-gray-900 mt-2'}>Адрес</label>
        <input id={'address'} placeholder={'По которому необходимо оказать помощь'}
               type={'text'} {...register('address', {
          required: "Введите адрес! (Не менее 10 символов)", minLength: {
            value: 10,
            message: 'Не менее 10 символов!'
          }
        })}
               className={'outline-gray-100 border-gray-200 p-2 rounded-xl shadow-sm outline-none'}/>
        {errors.address && <p className="text-red-600 text-sm">{errors.address.message}</p>}

        <button className={'transition duration-300 mt-3 rounded-md' +
          ' shadow-sm border-lime-600 hover:bg-lime-600 hover:text-white' +
          ' hover:border-lime-600 bg-white text-lime-600'}>{isSubmitting ? 'Отправка...' : 'Создать заявку'}
        </button>
      </form>

      {submitSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex
         items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <p className="mb-4 text-lg">Заявка на помощь успешно отправлена!</p>
            <button onClick={handlePopupClose}
                    className="px-4 py-2 rounded-md border-lime-600 hover:bg-lime-600 hover:text-white hover:border-none bg-white text-lime-600">Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  )

}