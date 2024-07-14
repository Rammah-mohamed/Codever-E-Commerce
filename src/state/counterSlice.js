import { createSlice } from "@reduxjs/toolkit";
import getOrderQuantity from "../functions/getOrder";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: getOrderQuantity(),
  },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
    increamentByAmount: (state, action) => {
      state.value += action.payload;
    },
    decreamentByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increament,
  decreament,
  increamentByAmount,
  decreamentByAmount,
} = counterSlice.actions;
export default counterSlice.reducer;
