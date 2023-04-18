import { createSlice } from '@reduxjs/toolkit';

export const topRatedSlice = createSlice({
  name: 'topRated',
  initialState: {
    value: [],
  },
  reducers: {
    getTopRated: (state, action) => {
      state.value = action.payload;
    },
    clearTopRated: (state) => {
      state.value = [];
    },
  },
});

export const { getTopRated, clearTopRated } = topRatedSlice.actions;

export default topRatedSlice.reducer;
