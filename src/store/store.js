import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import loginReducer from './loginSlice'
import sessionReducer from './getSessionSlice'
import searchPageReducer from './searchPageSlice'
import totalSearchPageReducer from './totalSearchPageSlice'
import movieListReducer from './movieListSlice'
import topRatedReducer from './topRatedSlice'
import mostPopularReducer from './mostPopularSlice'
export default configureStore({
  reducer: {
    //首頁輪播
    movieList: movieListReducer,

    //最高評分
    topRated: topRatedReducer,

    //最熱門
    mostPopular: mostPopularReducer,

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