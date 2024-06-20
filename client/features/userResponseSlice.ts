import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Bid {
  id: number,
  title: string,
  description: string,
  address: string,
  author_id: number,
  status: string
}

export interface BidsState {
  bids: Bid[] | [],

}

const initialState: BidsState = {
  bids: [],

}

export type Response = {
  userId: number,
  bidId: number
}

export const responseUserBid = createAsyncThunk('bids/changeBidStatus', async ({
                                                                                 userId,
                                                                                 bidId
                                                                               }: Response, {rejectWithValue}) => {
  try {
    await axios.put(`http://localhost:3000/api/bids/${bidId}`, {status: 'in progress'});
    await axios.post('http://localhost:3000/api/responses', {user_id: userId, bid_id: bidId});
    return {bidId}
  } catch (e) {
    return rejectWithValue;
  }
})

const responseSlice = createSlice({
  name: "bids",
  initialState,
  reducers: {
    setBids(state, action:PayloadAction<Bid[]>) {
      state.bids = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(responseUserBid.fulfilled, (state, action:PayloadAction<{bidId: number}>) => {
      const {bidId} = action.payload;
      console.log(state)
      const bid = state.bids.find(bid => bid.id === bidId)
      if (bid) {
        bid.status = 'in progress'
      } return
    })
  }
})

export const {setBids} = responseSlice.actions;
export default responseSlice.reducer;
