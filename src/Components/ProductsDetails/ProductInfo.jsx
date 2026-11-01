import { useState } from "react";
import { Button, Card, Chip, IconButton, Rating, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { starsClass, primaryBtn } from "./styles";

const MAX_QTY_PER_ORDER = 10;

export default function ProductInfo({ product }) {
  const { name, description, price, rate, quantity, reviews = [] } = product;

  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);

  const inStock = quantity > 0;
  const maxQty = Math.min(MAX_QTY_PER_ORDER, quantity);
  const total = (price * qty).toFixed(2);

  return (
    <Card variant="outlined" className="rounded-xl p-4 sm:p-5 md:p-7">
      <Stack direction="row" alignItems="flex-start" justifyContent="space-between" className="gap-2">
        <Typography
          variant="h1"
          className="min-w-0 break-words text-xl font-bold tracking-tight text-[#1b2233] sm:text-2xl md:text-3xl"
        >
          {name}
        </Typography>
        <IconButton
          size="small"
          aria-label="Add to wishlist"
          onClick={() => setLiked((v) => !v)}
        >
          {liked ? (
            <FavoriteIcon fontSize="small" className="text-red-500" />
          ) : (
            <FavoriteBorderIcon fontSize="small" />
          )}
        </IconButton>
      </Stack>

      <Stack direction="row" alignItems="center" className="mt-2 flex-wrap gap-x-2 gap-y-1">
        <Rating value={rate} precision={0.1} readOnly size="small" className={starsClass} />
        <Typography variant="body2" className="font-semibold text-[#1b2233]">
          {rate}
        </Typography>
        <Typography variant="body2" className="text-[#0f6b5a]">
          {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
        </Typography>
      </Stack>

      <Typography variant="h2" className="mt-4 text-3xl font-bold text-[#1b2233] sm:text-4xl">
        ${price}
      </Typography>

      <Typography
        variant="body1"
        className="mt-4 whitespace-pre-line wrap-break-word text-sm leading-relaxed text-slate-600 md:text-base"
      >
        {description}
      </Typography>

      <Stack direction="row" alignItems="center" className="mt-5">
        <Chip
          size="small"
          label={inStock ? `In Stock (${quantity} available)` : "Out of Stock"}
          className={`text-[11px] font-semibold ${
            inStock ? "bg-[#c9f0e3] text-[#0f6b5a]" : "bg-red-100 text-red-600"
          }`}
        />
      </Stack>

      <Stack direction={{ xs: "column", sm: "row" }} className="mt-4 gap-3">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="rounded-lg border border-slate-300 sm:justify-start"
        >
          <IconButton
            aria-label="Decrease quantity"
            size="small"
            disabled={qty <= 1}
            onClick={() => setQty((q) => q - 1)}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Typography className="w-10 text-center text-sm font-semibold">{qty}</Typography>
          <IconButton
            aria-label="Increase quantity"
            size="small"
            disabled={qty >= maxQty}
            onClick={() => setQty((q) => q + 1)}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Button
          variant="contained"
          disableElevation
          disabled={!inStock}
          startIcon={<ShoppingCartOutlinedIcon />}
          className={`w-full sm:w-auto sm:grow ${primaryBtn}`}
        >
          {`Add to Cart • $${total}`}
        </Button>
      </Stack>
    </Card>
  );
}