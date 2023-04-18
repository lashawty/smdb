import { createSlice } from '@reduxjs/toolkit';

export const searchPageSlice = createSlice({
  name: 'searchPage',
  initialState: {
    value: 1,
  },
  reducers: {
    getSearchPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getSearchPage } = searchPageSlice.actions;

export default searchPageSlice.reducer;
