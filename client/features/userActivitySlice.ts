import { createSlice } from '@reduxjs/toolkit';

export interface userActivityState {
  totalOrders: number,
  completedOrders: number,
}

const initialState: userActivityState = {
  totalOrders: 5,
  completedOrders: 10,
};

const userActivitySlice = createSlice({
  name: 'userActivity',
  initialState,
  reducers: {
    setTotalOrders(state, action) {
      state.totalOrders = action.payload;
    },
    setCompletedOrders(state, action) {
      state.completedOrders = action.payload;
    },
  },
});

export const { setTotalOrders, setCompletedOrders } = userActivitySlice.actions;

export default userActivitySlice.reducer;