import {
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import UseCategories from "../../hooks/UseCategories";
import CtegoryItem from "./CtegoryItem";

export default function Categories() {
  const { data, isPending, isError, error } = UseCategories();

  if (isPending) {
    return (
      <Box className="flex justify-center py-16">
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box className="flex justify-center px-4 py-16">
        <Typography color="error" className="text-center">
          {error?.message || "Something went wrong while loading categories."}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      className="w-full overflow-x-hidden bg-[#f8f9ff] px-3 py-8 sm:px-4 sm:py-10 lg:px-5 lg:py-12"
    >
      {/* نفس عرض ومسافات الكارد الأبيض بالـ Hero */}
      <Box className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-7">
        {/* ============ الهيدر ============ */}
        <Box className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Box>
            <Typography
              variant="caption"
              className="block text-[11px] font-bold uppercase tracking-wider text-[#0f6b5a]"
            >
              Catalog Architecture
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              className="mt-1 text-2xl font-bold tracking-tight text-[#1b2233] sm:text-3xl md:text-4xl"
            >
              Curated Categories
            </Typography>
          </Box>

          <Button
            endIcon={<ChevronRightIcon fontSize="small" />}
            className="self-start px-0 text-sm font-semibold normal-case text-[#0f6b5a] hover:bg-transparent hover:underline sm:self-auto"
            // TODO: component={Link} to="/products"
          >
            View All Departments
          </Button>
        </Box>

        {/* ============ الشبكة ============ */}
        <Box className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {data.map((category) => (
            <CtegoryItem key={category.id} category={category} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}