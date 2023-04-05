import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import 'antd/dist/reset.css';

import App from 'App'
import Home from 'routes/Home'

import AuthContext from "authContext";

import {ConfigProvider} from "antd"
import ruRU from 'antd/locale/ru_RU'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: '',
                element: <div>Overview</div>
            },
            {
                path: 'edit',
                element: <div>Edit</div>
            }
        ]
    }
],
    {
        basename: '/weeby'
    }
    );

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <AuthContext.Provider value={{authenticated: true, setAuthenticated: () => {}}}>
          <ConfigProvider locale={ruRU}>
              <RouterProvider router={router} />
          </ConfigProvider>
      </AuthContext.Provider>
  </React.StrictMode>,
)
