
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';
import { Outlet } from 'react-router';
import EthicalFrameworkSection from './../Components/EthicalFrameworkSection';

export default function MainLayout() {
  return (
    <>
    
    
          <Navbar />
      <main>
        <Outlet />
      </main>
      <EthicalFrameworkSection/>
      <Footer />
  
    
    </>
  )
}


