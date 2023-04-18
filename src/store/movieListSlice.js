import { createSlice } from '@reduxjs/toolkit';

export const movieListSlice = createSlice({
  name: 'movieList',
  initialState: {
    value: [],
  },
  reducers: {
    getMovieList: (state, action) => {
      state.value = action.payload;
    },
    clearMovieList: (state) => {
      state.value = [];
    },
  },
});

export const { getMovieList, clearMovieList } = movieListSlice.actions;

export default movieListSlice.reducer;
