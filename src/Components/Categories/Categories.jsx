import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import UseCategories from "../../hooks/UseCategories";
import CtegoryItem from './CtegoryItem';

export default function Categories() {
   


   const {data,isPending,isError,error} = UseCategories();

    if (isPending) return <CircularProgress />;
    if (isError) return <Typography color="error">{error}</Typography>;

    return (
        <Box>
  <Typography variant='h5' component={'h2'} sx={{ mb: 2 }}>Categories</Typography>
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
    {data.map((category) => (
      <CtegoryItem category={category} />
    ))}
  </Box>
</Box>
    );
}