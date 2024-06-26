import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  list: Bid[] | [],
  loading: boolean,
  error: null | string
}

const initialState: BidsState = {
  list: [],
  loading: false,
  error: null,
}
export const getBids = createAsyncThunk('bids/getBids', async (_, {rejectWithValue}) => {
  try {
    const bids = await axios('http://localhost:3000/bids')
    return bids.data
  } catch (error) {
    return rejectWithValue
  }
})

export const bidsSlice = createSlice({
    name: 'bids',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getBids.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(getBids.fulfilled, (state, action) => {
          state.loading = false
          state.error = null
          state.list = action.payload
        })
        .addCase(getBids.rejected, (state, action) => {
          state.error = action.payload as string
        })
    }
  }
)

export default bidsSlice.reducer