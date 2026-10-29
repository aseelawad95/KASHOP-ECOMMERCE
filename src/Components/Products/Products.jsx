import UseProducts from "../../hooks/UseProducts";
import ProductCard from './ProductCard';
import { Box,Typography,CircularProgress } from '@mui/material';

export default function Products() {

     const {data,isPending,isError,error} = UseProducts();

    if (isPending) return <CircularProgress />;
    if (isError) return <Typography color="error">{error}</Typography>;


  return (
    <Box>
  <Typography variant='h5' component={'h2'} sx={{ mb: 2 }}>Products</Typography>
  <Box
    sx={{
      display: 'grid',
      gap: 2,
      gridTemplateColumns: {
        xs: "repeat(2,1fr)",
        sm: "repeat(3,1fr)",
        md: "repeat(4,1fr)",
      },
    }}
  >
    {data.map((product) => (
      <ProductCard product={product} />
    ))}
  </Box>
</Box>
  )
}
