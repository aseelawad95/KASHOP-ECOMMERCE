import { createBrowserRouter } from "react-router";
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home/Home';
import AuthLayout from './Layouts/AuthLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      }
    ]
  },
  {
    element: <AuthLayout/>,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  }
]);
export default router;