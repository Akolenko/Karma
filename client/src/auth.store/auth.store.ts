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
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log('Что-то пошло не так.');
        }
    }

    async registration(name: string, dateOfBirth: string, email: string, password: string, phone: string) {
        try {
            const response = await AuthService.registration(name, dateOfBirth, email, password, phone)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log('Что-то пошло не так.');
            
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (error) {
            console.log('Что-то пошло не так.');
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
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log('Что-то пошло не так.');
        } finally {
            this.setLoading(false)
        }
    }
}