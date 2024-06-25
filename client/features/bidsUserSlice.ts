import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Bid {
  id: number,
  title: string,
  description: string,
  address: string,
  author_id: number,
  status: string,
  }
export type UserBid = {
  userId: string | null,
  bidId: number
}
export interface BidsState {
  list: Bid[] | [],
  loading: boolean,
  error: null | string
}

const initialState: BidsState = {
  list: [],
  loading: false,
  error: null,
}
export const getUserBids = createAsyncThunk('userBids/getUserBids', async (_, {rejectWithValue}) => {
  try {
    const userBids = await axios(`${import.meta.env.VITE_REACT_APP_API_URL}/profile/bids`)
    return userBids.data
  } catch (error) {
    return rejectWithValue(error)
  }
})
export const deleteUserBid = createAsyncThunk('userBids/deleteUserBids', async ({bidId, userId}:UserBid)=>{
  await axios.delete(`${import.meta.env.VITE_REACT_APP_API_URL}/profile/bids`, {data:{user_id: userId, bid_id: bidId}})
  return  {bidId}
})

export const userBidsSlice = createSlice({
    name: 'userBids',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getUserBids.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(getUserBids.fulfilled, (state, action) => {
          state.loading = false
          state.error = null
          state.list = action.payload
        })
        .addCase(getUserBids.rejected, (state, action) => {
          state.error = action.payload as string
        })
        .addCase(deleteUserBid.fulfilled,(state, action)=>{
          const {bidId} = action.payload;
          state.list = state.list.filter(bid => bid.id !== bidId)
        })
    }
  }
)

export default userBidsSlice.reducer