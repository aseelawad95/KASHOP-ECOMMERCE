import { RouterProvider } from 'react-router';
import router from './router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
  import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from './theme';
import { useThemeStore } from './Store/themeStore';


const queryClient = new QueryClient()

export default function App() {
  
  const mode = useThemeStore((state) => state.mode);
  const theme = getTheme(mode);
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
