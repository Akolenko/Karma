import { IUser } from "../IUser";
import { Bid } from "./Bid.interface";

export interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser
}