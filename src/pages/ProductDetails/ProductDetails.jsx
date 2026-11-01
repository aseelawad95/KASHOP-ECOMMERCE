import { useParams } from "react-router";
import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import UseProduct from "../../hooks/UseProduct";
import ProductGallery from "../../Components/ProductsDetails/ProductGallery";
import ProductInfo from "../../Components/ProductsDetails/ProductInfo";
import ProductTabs from "../../Components/ProductsDetails/ProductTabs";

export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, isPending, isError, error } = UseProduct(id);

  if (isPending) {
    return (
      <Box className="flex min-h-screen items-center justify-center">
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box className="flex min-h-screen items-center justify-center px-4">
        <Typography color="error" className="text-center">
          {error?.message || "Something went wrong while loading the product."}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="main"
      className="flex min-h-screen w-full justify-center overflow-x-hidden bg-[#f8f9ff] py-4 sm:py-6 md:py-10"
    >
      <Container maxWidth="lg" className="mx-auto! w-full px-3 sm:px-6 pt-15">
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          <Grid size={{ xs: 12, md: 5 }} className="min-w-0">
            <ProductGallery image={product.image} name={product.name} />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} className="min-w-0">
            <ProductInfo product={product} />
          </Grid>
        </Grid>

        <ProductTabs product={product} />
      </Container>
    </Box>
  );
}