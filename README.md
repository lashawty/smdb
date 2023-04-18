# [TMDB API 串接](https://smdb-dist.vercel.app/)
![](https://i.imgur.com/Dsxt4An.jpg)
## 使用技術： React, Redux, React-Router, Axios, vite
## UI Library: [Ant Design](https://ant.design/)
## API： [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)

> 因使用 CORS Anywhere 進行 API 請求，若過多的請求會被限制，導致請求失敗或延遲。

### 實作功能

1. 固定資料呈現
2. 變動資料呈現
3. 簡易登入燈箱 帳號：sean 密碼：123
4. 我的最愛電影頁面

### 使用方式
clone => npm i => npm run dev

### 專案介紹：
這是一個使用 React 技術串接 TMDB API 的網站，能夠呈現電影的相關資訊，並提供簡易登入系統，以便使用者可以紀錄自己的最愛電影。在此網站中，使用者可以透過搜尋框查詢電影，也可以透過分類頁面瀏覽相關電影。當使用者登入後，可以將心儀的電影加入我的最愛頁面，並在下次登入時查看自己的收藏清單。

使用者可以使用預設帳號密碼進行登入。若使用者未登入，則無法進入我的最愛頁面。

### 固定資料呈現
僅第一次渲染抓取資料，切換頁面不重新撈資料，降低請求次數，提高網站效能。
![](https://i.imgur.com/ipGgYbO.png)
![](https://i.imgur.com/B4oOl3j.jpg)

### 浮動資料
#### 搜尋功能
**可切換頁籤顯示搜尋結果，每頁20筆資料**

![](https://i.imgur.com/9dr1QXH.jpg)
![](https://i.imgur.com/8HeIGMu.png)

**無資料則顯示無資料畫面**
![](https://i.imgur.com/Z3Z76h7.png)

#### 登入功能
![](https://i.imgur.com/3J2vHtu.png)

登入後須取得第三方網站授權始可取得我的片單
> 因第三方網站需另外登入 需要另外操作
同第三方網站的資料

![](https://i.imgur.com/DicgQEr.png)
![](https://i.imgur.com/MWfGRPe.png)

登入後可於每部電影上點擊愛心加入我的最愛，並於我的最愛清單頁面移除
![](https://i.imgur.com/UIjUo5J.png)
![](https://i.imgur.com/8bTjacx.png)

若未登入直接輸入路由 /my-movie
會直接跳轉回首頁

### 總結
此專案使用 React 技術串接 TMDB API，提供使用者查詢電影資訊及收藏最愛電影的功能。透過 Redux 管理狀態，React-Router 實現路由控制，並使用 Axios 請求 API 資料。
