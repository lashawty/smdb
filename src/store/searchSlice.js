import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: []
  },
  reducers: {
    getSearchResult: (state, action) => {
      state.value = action.payload
    },
    clearResult: state => {
      state.value = []
    },
  },
})

export const { getSearchResult, clearResult } = searchSlice.actions

export default searchSlice.reducer