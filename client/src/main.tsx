import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import './index.css'
import AuthStore from './auth.store/auth.store.ts'

interface AuthState {
    authStore: AuthStore
}

const authStore = new AuthStore()

export const AuthContext = createContext<AuthState>({
    authStore
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthContext.Provider value={{
        authStore
    }}>
        <App />
    </AuthContext.Provider>
    

)
