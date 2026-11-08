import { RouterProvider } from 'react-router';
import router from './router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
  import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
           
    <QueryClientProvider client={queryClient}>
       <ToastContainer />
         <RouterProvider router={router} /> 
    </QueryClientProvider>
  
    </>
  )
}
