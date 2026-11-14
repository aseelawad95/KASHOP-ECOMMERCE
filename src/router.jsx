import { createBrowserRouter } from "react-router";
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home/Home';
import AuthLayout from './Layouts/AuthLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/Forgotpassword/ForgotPassword';
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from './pages/Cart/Cart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },{
        path:"products/:id",
        element:<ProductDetails/>
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
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword/>
      },{
        path:'cart',
        element:<Cart/>
      }
    ]
  }
]);
export default router;