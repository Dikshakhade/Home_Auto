import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  componentState: [],
};

const stateSelect = createSlice({
  name: "state",
  initialState,
  reducers: {
    stateReducer: (state, action) => {
      state.componentState.push(action.payload);
    },
  },
});
