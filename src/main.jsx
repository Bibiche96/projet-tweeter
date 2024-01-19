import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,Outlet, RouterProvider } from 'react-router-dom'

import Container from './Components/Container.jsx'
import { Navbar } from './Navbar.jsx'
import { Searchtweet } from './Searchtweet.jsx'
import { Profile } from './Profile.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Container><Navbar/><Outlet/><Searchtweet/></Container>,

    children: [
      {
        path:"/",
        element:<App/>,
      },

      {
        path:"/Profile",
        element:<Profile/>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      
   <RouterProvider router={router} />

  </React.StrictMode>,
)
