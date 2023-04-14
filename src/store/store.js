import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import searchReducer from './searchSlice'
import loginReducer from './loginSlice'
import sessionReducer from './getSessionSlice'
import searchPageReducer from './searchPageSlice'
import totalSearchPageReducer from './totalSearchPageSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,

    //搜尋結果
    search: searchReducer,
    
    //搜尋結果的頁數
    searchPage: searchPageReducer,
    totalSearchPage: totalSearchPageReducer,

    //登入狀態
    login: loginReducer,

    //取得session
    session: sessionReducer,
  }
})