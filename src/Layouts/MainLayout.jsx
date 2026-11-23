
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';

export default function MainLayout() {
  return (
    <>
    
     <Box className="flex min-h-screen flex-col bg-[#f8f7ff]">
      <Box component="main" className="flex-1">
          <Navbar />
      <main>
        <Outlet />
      </main>
      </Box>
      <Footer />
    </Box>
    </>
  )
}


