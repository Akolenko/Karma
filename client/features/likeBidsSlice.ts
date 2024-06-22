import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Bid {
  id: number;
  title: string;
  status: string;
}

interface Like {
  bidId: number;
  userId: number;
}

interface BidsState {
  bids: Bid[];
  likes: Like[] | [];
}

interface LikeBidPayload {
  bidId: number;
  userId: string| null;
}

const initialState: BidsState = {
  bids: [],
  likes: [],
};
const userId = localStorage.getItem('userId');

export const getBids = createAsyncThunk('bids/getBids', async (_, {rejectWithValue}) => {
  try {
    const bids = await axios(`${import.meta.env.VITE_REACT_APP_API_URL}/bids`, {params: {userId}})
    return bids.data
  } catch (error) {
    return rejectWithValue
  }
})
export const getLikes = createAsyncThunk('bids/getLikes', async (_) => {
  const likes = await axios(`${import.meta.env.VITE_REACT_APP_API_URL}/likes`);

  return likes.data;
});


// Асинхронный thunk лайка заявки
export const likeBid = createAsyncThunk(
  'bids/likeBid',
  async ({ bidId, userId }: LikeBidPayload) => {
    try {
      await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/bids/${bidId}/like`,
        { user_id: userId, bid_id: bidId});
      return { bidId, userId };
    } catch (e){
      console.log({e})
    }
  }
);

const likeBidsSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    setBids(state, action: PayloadAction<Bid[]>) {
      state.bids = action.payload;
    },
    setLikes(state, action: PayloadAction<Like[]>) {
      state.likes = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getBids.fulfilled, (state, action: PayloadAction<Bid[]>) => {
      state.bids = action.payload;
    });
    builder.addCase(getLikes.fulfilled, (state, action: PayloadAction<Like[]>) => {
      state.likes = action.payload;
    });
    builder.addCase(likeBid.fulfilled, (state, action: PayloadAction<Like>) => {
      state.likes.push(action.payload);
    });
  }
});

export const { setBids, setLikes } = likeBidsSlice.actions;
export default likeBidsSlice.reducer;