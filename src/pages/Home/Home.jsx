
import Categories from './../../Components/Categories/Categories';
import Products from './../../Components/Products/Products';
// import UserProfile from './../Register/useProfile';
import Hero from './../../Components/Hero';
import { useAuthStore } from './../../Store/useAuthStore';
import { Alert } from '@mui/material';


export default function Home() {
  const token = useAuthStore((state) => state.token);
  return (
   <>
   {token ? <Alert severity="success">Welcome Back !</Alert> : ""}
    <Hero />
      <Categories/>
      <Products/>

      {/* <UserProfile/> */}
    </>
  )
}
