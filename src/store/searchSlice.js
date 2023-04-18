import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: [],
  },
  reducers: {
    getSearchResult: (state, action) => {
      state.value = action.payload;
    },
    clearResult: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getSearchResult, clearResult } = searchSlice.actions;

export default searchSlice.reducer;
