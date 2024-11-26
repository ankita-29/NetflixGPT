import React from 'react'
import Login from './Login.js'
import Browse from './Browse.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header.js'
const Body = () => {
    const routes = createBrowserRouter(
        [
            {path:"/", element:<Login/>},
            {path:"/browse", element:<Browse/>},
        ])
  return (
    <div>
        <Header/>
        <RouterProvider router={routes}/>

    </div>
  )
}

export default Body