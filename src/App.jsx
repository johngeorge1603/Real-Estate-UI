import React from 'react';
import Navbar from './components/navbar/Navbar.jsx'; 
import HomePage from './pages/home/HomePage.jsx';
import Layout from './pages/layout/Layout.jsx';
import ListPage from './pages/listpage/ListPage.jsx';
import SinglePage from './pages/singlepage/SinglePage.jsx';
import Login from './pages/login/Login.jsx';
import ProfilePage from './pages/profile/ProfilePage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";





function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/listpage",
          element: <ListPage/>,
        },
        {
          path:"/:id",
          element: <SinglePage/>,
        },
        {
          path:"/",
          element: <HomePage/>,
        },
        {
          path:"/login",
          element: <Login/>,
        },
        {
          path:"/profile",
          element: <ProfilePage/>,
        },
      ]
    },
    
  ])
  return (
    <div className="layout">
        <RouterProvider router={router} />
    </div>
  )
}

export default App;
