import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Like {
  bidId: number;
  userId: number;
  bids_id: number
}

interface LikesState {
  likes: Like[];
}

interface LikeBidPayload {
  bidId: number;
  userId: string | null;
}

const initialState: LikesState = {
  likes: [],
};

export const getLikes = createAsyncThunk('likes/getLikes', async (_) => {
  const likes = await axios(`${import.meta.env.VITE_REACT_APP_API_URL}/likes`);
  return likes.data;
});

// Асинхронный thunk лайка заявки
export const likeBid = createAsyncThunk(
  'likes/likeBid',
  async ({bidId, userId}: LikeBidPayload) => {
    try {
      const like = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/bids/${bidId}/like`,
        {user_id: userId, bid_id: bidId});
      console.log(like)
      return like.data;
    } catch (e) {
      console.log({e})
    }
  }
);

const likeBidsSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getLikes.fulfilled, (state, action: PayloadAction<Like[]>) => {
        state.likes = action.payload;
      })
      .addCase(likeBid.fulfilled, (state, action: PayloadAction<Like>) => {
        state.likes.push(action.payload);
      });
  }
});

export default likeBidsSlice.reducer;