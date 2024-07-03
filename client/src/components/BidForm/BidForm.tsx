import { SubmitHandler, useForm } from "react-hook-form";
import { JSX, useState } from "react";
import SuccessModal from "../UI/Modal/SuccesModal/SuccessModal.tsx";
import $api from "../../http";

interface Form {
  title: string,
  description: string,
  address: string,
}


export default function BidForm(): JSX.Element {
  const {register, handleSubmit, formState: {isSubmitting, errors}, reset} = useForm<Form>()

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const user = localStorage.getItem('user')
  const userObject = JSON.parse(user as string)
  const userObjectId = String(userObject.id)


  const submit: SubmitHandler<Form> = function (data) {
    $api.post(`${import.meta.env.VITE_REACT_APP_API_URL}/bids`, data, {params: {userId: userObjectId}})
      .then(response => {
        console.log(response.data)
        reset()
        setSubmitSuccess(true)
      })
      .catch(error => console.log(error.message, "нет backend"))
  }
  const handlePopupClose = () => {
    setSubmitSuccess(false);
    window.location.assign('/bids-list');
    // пока перенаправляю заказчиков на страницу всех заявок
  };

  return (
    <>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Создание Вашей
        заявки</h2>
      <form onSubmit={handleSubmit(submit)}
            className={'drop-shadow-md flex flex-col bg-white p-6 w-96 rounded-xl gap-2 mt-12 mx-[auto] '}>
        <label className="text-sm font-medium tracking-wide leading-8 text-gray-900" htmlFor={'title'}>Название Вашей
          заявки:</label>
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
               className={'text-sm font-medium tracking-wide leading-8 text-gray-900 mt-2'}>Адрес по которому Вам требуется помощь:</label>
        <input id={'address'} placeholder={'Введите адрес'}
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
      {submitSuccess && (<SuccessModal onClick={handlePopupClose}/>)}
    </>
  )

}