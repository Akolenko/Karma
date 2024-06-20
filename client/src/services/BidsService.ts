import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";
import { Bid } from "../models/response/Bid.interface";

export default class BidsServise {
    static fetchBids() {
        return $api.get<Bid[]>('/bids')
    }
}