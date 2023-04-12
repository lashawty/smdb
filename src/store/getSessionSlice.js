import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    value: null
  },
  reducers: {
    addSession: (state, action) => {
      state.value = action.payload;
    },
    clearSession: state => {
      state.value = null
    },
  },
})

export const { addSession, clearSession } = sessionSlice.actions

export default sessionSlice.reducer