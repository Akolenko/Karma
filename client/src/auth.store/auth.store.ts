import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthServise";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthStore {
    user = {} as IUser
    isAuth = false
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setUser(user: IUser) {
        this.user = user
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('userID', response.data.user.id)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error.response?.data?.message);
            
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('userID', response.data.user.id)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error.response?.data?.message);
            
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            localStorage.removeItem('userID')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async checkAuth() {
        this.isLoading = true
        try {
            const response = await axios.get<AuthResponse>('http://localhost:3000/api/refresh', {
                withCredentials: true
            })
            console.log(response);
            
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('userID', response.data.user.id)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error.response?.data?.message);
        } finally {
            this.setLoading(false)
        }
    }
}