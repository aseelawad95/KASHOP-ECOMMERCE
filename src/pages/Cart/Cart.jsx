
import useCart from '../../hooks/useCart';
import { Box, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { Link } from 'react-router';
import { useAuthStore } from '../../Store/useAuthStore';
import CartSummary from './CartSummary';
import CartItem from './CartItem';


export default function Cart() {
    const token = useAuthStore((state) => state.token);
    const {data: cartData, isPending, isError, error} = useCart();
    console.log(cartData);
    if (!token) {
    return (
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Please login to view your cart
        </Typography>

        <Button variant="contained" component={Link} to="/login">
          Login
        </Button>
      </Box>
    );
  }

  if(isPending){
    return <CircularProgress/>
  }
  if(isError){
    return <Alert severity="error">{error?.response?.data?.message || "Something went wrong"}</Alert>
  }
  return (
    <div>
      {cartData?.items?.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <CartSummary total={cartData?.cartTotal || 0} />
    </div>
  )
}
