import { createSlice } from '@reduxjs/toolkit';

export const totalSearchPageSlice = createSlice({
  name: 'totalSearchPageSlice',
  initialState: {
    value: 1,
  },
  reducers: {
    getTotalSearchPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getTotalSearchPage } = totalSearchPageSlice.actions;

export default totalSearchPageSlice.reducer;
