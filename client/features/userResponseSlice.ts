import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface BidType {
  id: number,
  title: string,
  description: string,
  address: string,
  author_id: number,
  status: string
}

export interface BidsState {
  bids: BidType[] | [],
}

const initialState: BidsState = {
  bids: [],
}

export type Response = {
  userId: string|null,
  bidId: number
}

export const responseUserBid = createAsyncThunk('bids/changeBidStatus', async ({userId, bidId}: Response) => {
  await axios.put(`${import.meta.env.VITE_REACT_APP_API_URL}/bids/${bidId}`, {status: 'response'});
  await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/responses`, {user_id: userId, bid_id: bidId});
  window.location.assign('/profile/responses')
  return {bidId}
})
const userId: string | null = localStorage.getItem('userId');
export const getResponses = createAsyncThunk('responses/getResponses', async(_, {rejectWithValue}) => {
  try {
    const responses = await axios(`${import.meta.env.VITE_REACT_APP_API_URL}/my-responses`, {params: {userId}})
    return responses.data
  } catch (error){
    console.log({error})
    return rejectWithValue(error)
  }
})

const responseSlice = createSlice({
  name: "bids",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(responseUserBid.fulfilled, (state, action:PayloadAction<{bidId: number}>) => {
      const {bidId} = action.payload;
      const bid = state.bids.find(bid => bid.id === bidId)
      if (bid) {
        bid.status = 'create'
      }
      return
    })
      .addCase(getResponses.fulfilled, (state, action)=>{
      state.bids = action.payload
      })
  }
})

export default responseSlice.reducer;
