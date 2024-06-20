import ReactDOM from 'react-dom/client'
import React, { createContext } from 'react'
import App from './app/App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../redux/store/store.ts";
import AuthStore from './auth.store/auth.store.ts'

interface AuthState {
    authStore: AuthStore
}

const authStore = new AuthStore()

export const AuthContext = createContext<AuthState>({
    authStore
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthContext.Provider value={{ authStore }}>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </AuthContext.Provider>
)
