import { createSlice } from '@reduxjs/toolkit';

export const mostPopularSlice = createSlice({
  name: 'mostPopular',
  initialState: {
    value: [],
  },
  reducers: {
    getMostPopular: (state, action) => {
      state.value = action.payload;
    },
    clearMostPopular: (state) => {
      state.value = [];
    },
  },
});

export const { getMostPopular, clearMostPopular } = mostPopularSlice.actions;

export default mostPopularSlice.reducer;
