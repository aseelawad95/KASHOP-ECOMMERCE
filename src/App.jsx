import { RouterProvider } from 'react-router';
import router from './router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
  import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


const queryClient = new QueryClient()

export default function App() {
  return (
    <>
           
   <ThemeProvider theme={theme}>
     <QueryClientProvider client={queryClient}>
       <ToastContainer />
         <RouterProvider router={router} /> 
    </QueryClientProvider>
    </ThemeProvider>
  
    </>
  )
}
