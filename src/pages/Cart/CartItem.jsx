import { Box, Paper, Typography, Button, IconButton } from "@mui/material";
import useUpdateCartItem from "../../hooks/useUpdateCartItem";
import useDeleteItem from './../../hooks/useDeleteItem';

export default function CartItem({ item }) {
  const { mutate: updateCartItem, isPending } = useUpdateCartItem();
  const { mutate: deleteCartItem } = useDeleteItem();
  

  const handelIncrease = () => {
    updateCartItem({ productId: item.productId, count: item.count + 1 });
  };
  const handelDecrease = () => {
    if (item.count > 1) {
      updateCartItem({ productId: item.productId, count: item.count - 1 });
    }
  };
   const handelDelete = () => {
    deleteCartItem({ productId: item.productId });
  }
  return (
    <Paper>
      <Box>
        <Typography variant="body1">{item.productName}</Typography>
        <Typography variant="body2">${item.price.toFixed(2)}</Typography>
      </Box>
      <Box>
        <Button
          onClick={handelDecrease}
          disabled={isPending || item.count <= 1}
        >
          -
        </Button>
        <span>{item.count}</span>
        <Button onClick={handelIncrease} disabled={isPending}>
          +
        </Button>
        <IconButton aria-label="remove item" color="error" onClick={handelDelete}>
          🗑️
        </IconButton>
      </Box>
      <Typography variant="body2">Quantity: {item.count}</Typography>
      <Typography variant="body2">
        Total: ${item.totalPrice.toFixed(2)}
      </Typography>
    </Paper>
  );
}
