import { useMemo, useState } from "react";
import { Box, Chip, CircularProgress, Typography } from "@mui/material";
import UseProducts from "../../hooks/UseProducts";
import ProductCard from "./ProductCard";

const FILTERS = ["All", "Bestsellers", "New In"];

export default function Products() {
  const { data, isPending, isError, error } = UseProducts();
  const [filter, setFilter] = useState("All");

  const products = useMemo(() => {
    if (!data) return [];
    if (filter === "Bestsellers") return [...data].sort((a, b) => b.rate - a.rate);
    if (filter === "New In") return [...data].sort((a, b) => b.id - a.id);
    return data;
  }, [data, filter]);

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
          {error?.message || "Something went wrong while loading products."}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      className="w-full overflow-x-hidden bg-[#f8f9ff] px-3 py-8 sm:px-4 sm:py-10 lg:px-5 lg:py-12"
    >
      <Box className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-7">
        <Box className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Box>
            <Typography
              variant="caption"
              className="block text-[11px] font-bold uppercase tracking-wider text-[#0f6b5a]"
            >
              Editor&rsquo;s Selection
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              className="mt-1 text-2xl font-bold tracking-tight text-[#1b2233] sm:text-3xl md:text-4xl"
            >
              Featured &amp; Latest Additions
            </Typography>
          </Box>

          <Box className="flex flex-wrap gap-2">
            {FILTERS.map((item) => {
              const active = filter === item;
              return (
                <Chip
                  key={item}
                  size="small"
                  label={item}
                  clickable
                  onClick={() => setFilter(item)}
                  className={`px-1 text-xs font-semibold ${
                    active
                      ? "bg-[#dbe3f8] text-[#0f6b5a] hover:bg-[#dbe3f8]"
                      : "bg-white text-slate-600 hover:bg-[#eef0fb]"
                  }`}
                />
              );
            })}
          </Box>
        </Box>

        <Box className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}