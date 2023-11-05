import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Home/Home';
import ErrorPage from './ErrorPage/ErrorPage';
import SignIn from './SignIn/SignIn';
import AuthProvider from './AuthProvider/AuthProvider';
import SignUp from './SignUp/SignUp';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('books.json')
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,

      },
      {
        path: "signup",
        element: <SignUp></SignUp>,

      },




    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
