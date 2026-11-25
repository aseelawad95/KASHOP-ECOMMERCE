import { useMemo, useState } from "react";
import { Link, useParams } from "react-router";
import {
  Box,
  Breadcrumbs,
  MenuItem,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";
import UseGetProductByCategory from "./../../hooks/useGetProductByCategory";
import ProductCard from "./../../Components/Products/ProductCard";
import UseCategories from "../../hooks/UseCategories";

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "priceAsc", label: "Price: Low to High" },
  { value: "priceDesc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

function ProductSkeleton() {
  return (
    <Box className="rounded-xl bg-white p-3 shadow-sm">
      <Skeleton variant="rounded" className="aspect-square w-full" height="auto" />
      <Skeleton width="40%" className="mt-3" />
      <Skeleton width="90%" />
      <Box className="mt-3 flex items-center justify-between">
        <Skeleton width="30%" height={32} />
        <Skeleton variant="rounded" width={60} height={28} />
      </Box>
    </Box>
  );
}

const gridClass =
  "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6";

export default function CategoryProducts() {
  const { id } = useParams();
  const [sortBy, setSortBy] = useState("default");

  const {
    data: products,
    isPending,
    isError,
    error,
  } = UseGetProductByCategory(id);

  const { data: categoriesData } = UseCategories();

  const categories = Array.isArray(categoriesData)
    ? categoriesData
    : categoriesData?.data ?? [];

  const categoryName = categories.find(
    (c) => String(c.id) === String(id)
  )?.name;

  const sortedProducts = useMemo(() => {
    const list = [...(products ?? [])];
    switch (sortBy) {
      case "priceAsc":
        return list.sort((a, b) => a.price - b.price);
      case "priceDesc":
        return list.sort((a, b) => b.price - a.price);
      case "rating":
        return list.sort((a, b) => (b.rate ?? 0) - (a.rate ?? 0));
      default:
        return list;
    }
  }, [products, sortBy]);

  return (
    <Box className="mx-auto min-h-[70vh] w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6">
      <Breadcrumbs className="mb-3 text-sm">
        <Link to="/" className="text-slate-500 hover:text-[#0f6b5a]">
          Home
        </Link>
        <Typography className="text-sm font-semibold text-[#1b2233]">
          {categoryName || "Category"}
        </Typography>
      </Breadcrumbs>

      <Box className="mb-8 flex flex-col gap-4 rounded-2xl bg-[#eef0fb] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Box>
          <Typography
            variant="h5"
            className="text-xl font-bold text-[#1b2233] sm:text-2xl"
          >
            {categoryName || "Category Products"}
          </Typography>
          {!isPending && !isError && (
            <Typography variant="body2" className="mt-1 text-slate-600">
              {products.length} {products.length === 1 ? "product" : "products"}
            </Typography>
          )}
        </Box>

        <Select
          size="small"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="min-w-48 bg-white"
        >
          {sortOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {isPending ? (
        <Box className={gridClass}>
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </Box>
      ) : isError ? (
        <Box className="flex items-center justify-center py-16">
          <Typography color="error" className="text-center">
            {error?.message || "Something went wrong while loading the products."}
          </Typography>
        </Box>
      ) : sortedProducts.length === 0 ? (
        <Box className="flex flex-col items-center justify-center rounded-xl bg-white py-16 text-center shadow-sm">
          <Typography className="font-semibold text-[#1b2233]">
            No products in this category yet.
          </Typography>
          <Typography variant="body2" className="mt-1 text-slate-500">
            Check back soon or browse other categories.
          </Typography>
          <Link
            to="/"
            className="mt-4 rounded-lg bg-[#0f6b5a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0b5748]"
          >
            Back to Home
          </Link>
        </Box>
      ) : (
        <Box className={gridClass}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      )}
    </Box>
  );
}