import React from 'react'
import Login from './Login.js'
import Browse from './Browse.js'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './Header.js'

const AppLayout=()=>{
  return(
    <div>
          <Header/>
          <Outlet/>
    </div>

  )
}
const routes = createBrowserRouter(
  [
    {
    path :'/',
    element: <AppLayout/>,
    children:[
      {path:"/", element:<Login/>},
      {path:"/browse", element:<Browse/>},
    ]
  },
])
const Body = () => {
    
  return (
    <RouterProvider router={routes}/>
  )
}

export default Body