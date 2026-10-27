
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';
import { Outlet } from 'react-router';
import Hero from './../Components/Hero';

export default function MainLayout() {
  return (
    <>
     <Navbar />
      <Hero />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
