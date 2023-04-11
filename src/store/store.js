import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import searchReducer from './searchSlice'
// import searchValueSlice from './searchValueSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,

    //搜尋狀態
    // searchValue: searchValueReducer,
    search: searchReducer
  }
})