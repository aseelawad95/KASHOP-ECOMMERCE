
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';
import { Outlet } from 'react-router';

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


