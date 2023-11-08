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
import AddBook from './Components/Home/AddBook/AddBook';
import AllBooks from './Components/AllBooks/AllBooks';
import BorrowBook from './Components/BorrowBook/BorrowBook';
import Novel from './Components/Category/Novel/Novel';
import Thriller from './Components/Category/Thriller/Thriller';
import History from './Components/Category/History/History';
import Drama from './Components/Category/Drama/Drama';
import DetailBook from './Components/DetailBook/DetailBook';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateDetails from './Components/UpdateDetails/UpdateDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://online-library-server.vercel.app/categories')
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,

      },
      {
        path: "signup",
        element: <SignUp></SignUp>,

      },
      {
        path: "addbook",
        element: <PrivateRoute> <AddBook></AddBook></PrivateRoute>,

      },
      {
        path: "allbooks",
        element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,

      },
      {
        path: "borrowbook",
        element: <PrivateRoute><BorrowBook></BorrowBook></PrivateRoute>,
        loader: () => fetch("https://online-library-server.vercel.app/borrowbooks")

      },
      {
        path: "novel",
        element: <Novel></Novel>,

      },
      {
        path: "thriller",
        element: <Thriller></Thriller>,

      },
      {
        path: "history",
        element: <History></History>,

      },
      {
        path: "drama",
        element: <Drama></Drama>,

      },
      {
        path: "detailbook/:id",
        element: <PrivateRoute><DetailBook></DetailBook></PrivateRoute>,
        loader: ({ params }) => fetch(`https://online-library-server.vercel.app/books/${params.id}`)

      },
      {
        path: "updatedetails/:id",
        element: <PrivateRoute><UpdateDetails></UpdateDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://online-library-server.vercel.app/books/${params.id}`)

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
