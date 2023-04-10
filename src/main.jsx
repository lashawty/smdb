import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SearchPage from './routes/SearchPage'
import TopRatedPage from './routes/TopRatedPage'
import MostPopularPage from './routes/MostPopularPage'
import store from './store/store'
import { Provider } from 'react-redux'
import './font.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/top-rated",
    element: <TopRatedPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/most-popular",
    element: <MostPopularPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
