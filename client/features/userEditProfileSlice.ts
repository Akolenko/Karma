import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


const userSlice = createSlice({
  name: "user",
  initialState:{
    fio:"",
    email:"",
    phone:"",
  },
  reducers: {
    updateUser(state, action) {
      state.fio = action.payload.fio;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    }
  },

})

export const {updateUser} = userSlice.actions; 
export default userSlice.reducer;
