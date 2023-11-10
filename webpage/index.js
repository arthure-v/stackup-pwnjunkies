import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './Login';
import RegisterForm from './Register';
import Admin from './Admin';
import InputBoxComponent from './Home'
import Viewmore from './Viewmore';
import Profile from './Profile';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './Cart';
import Termscondition from './Termscondition';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Login",
    element: <LoginForm/>,
  },
  {
    path: "Register",
    element: <RegisterForm/>,
  },
  {
    path: "Admin",
    element: <Admin/>,
  },
  {
    path: "Cart",
    element: <Cart/>,
  },
  {
    path: "Profile",
    element: <Profile/>,
  },
  {
    path: "Termscondition",
    element: <Termscondition/>,
  },
  {
    path: "Viewmore",
    element: <Viewmore/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
