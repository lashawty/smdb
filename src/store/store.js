import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import searchReducer from './searchSlice'
import loginReducer from './loginSlice'
import sessionReducer from './getSessionSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,

    //搜尋狀態
    search: searchReducer,
    //登入狀態
    login: loginReducer,
    //取得session
    session: sessionReducer,
  }
})