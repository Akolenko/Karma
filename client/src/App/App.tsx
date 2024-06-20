
import { useContext, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import LoginForm from '../components/LoginForm'
import { AuthContext } from '../main'
import { observer } from 'mobx-react-lite'
import { Bid } from '../models/response/Bid.interface'
import BidsServise from '../services/BidsService'

function App() {

  const { authStore } = useContext(AuthContext)
  const [bids, setBids] = useState<Bid[]>([])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      authStore.checkAuth()
    }

  }, [])

  async function getBids() {
    try {
      const response = await BidsServise.fetchBids()
      setBids(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }

  if (authStore.isLoading) {
    return <div>Загрузка...</div>
  }
  
  if (!authStore.isAuth) {
    return (<>
    <LoginForm/>
    <button onClick={getBids}>Посмотреть заявки</button>
    </>)
  }


  return (
    <>
    <h1>{authStore.isAuth ? `Пользователь авторизован ${authStore.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
    <button onClick={() => authStore.logout()}>Выйти</button>
    <div>
      <button onClick={getBids}>Посмотреть заявки</button>
      {
        bids && bids.length ? bids.map(bid => {
          return (
            <div key={bid.id}>
              <div>{bid.title}</div>
              <div>{bid.description}</div>
              <div>{bid.address}</div>
            </div>
          )
        }) : <div>Заявок пока нет</div>
      }
    </div>
    </>
  )
}

export default observer(App)
