
import Navbar from './../Components/Navbar';

import { Outlet } from 'react-router';
import Footer from './../Components/Footer';

export default function MainLayout() {
  return (
    <>
    
    
       <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      
  
    
    </>
  )
}


