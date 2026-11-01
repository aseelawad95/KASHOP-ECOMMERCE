import { Box, Button, Card, CardMedia, Chip, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function ProductCard({ product }) {
  const { name, image, price, rate, quantity } = product;

  // غير هدول حسب أسماء الحقول اللي بيرجعها الـ API عندك
  const categoryName = product.categoryName ?? product.category?.name;
  const reviewsCount = product.reviewsCount ?? product.reviews?.length;
  const oldPrice = product.oldPrice;

  const inStock = quantity === undefined || quantity > 0;

  return (
    <Card
      elevation={0}
      className="flex h-full flex-col rounded-xl bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md sm:p-3"
      // TODO: اجعل الكارد رابط لصفحة التفاصيل: component={Link} to={`/products/${product.id}`}
    >
      {/* ============ الصورة ============ */}
      <Box className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#eef0fb]">
        <CardMedia
          component="img"
          image={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {categoryName && (
          <Chip
            size="small"
            label={categoryName}
            className="absolute left-2 top-2 h-5 bg-white/95 text-[10px] font-semibold text-[#1b2233] sm:left-2.5 sm:top-2.5"
          />
        )}
      </Box>

      {/* ============ المعلومات ============ */}
      <Box className="mt-3 flex grow flex-col">
        <Box className="flex items-center gap-1">
          <StarIcon className="text-sm! text-[#f5a623]" />
          <Typography variant="caption" className="font-bold text-[#1b2233]">
            {rate}
          </Typography>
          {typeof reviewsCount === "number" && (
            <Typography variant="caption" className="text-slate-500">
              ({reviewsCount})
            </Typography>
          )}
        </Box>

        <Typography
          variant="subtitle2"
          className="mt-1.5 line-clamp-2 min-h-10 text-sm font-bold leading-5 text-[#1b2233] sm:text-[15px]"
        >
          {name}
        </Typography>

        {/* ============ السعر وزر الإضافة ============ */}
        <Box className="mt-auto flex flex-wrap items-center justify-between gap-x-2 gap-y-2 pt-3">
          <Box className="flex items-baseline gap-1.5">
            <Typography
              variant="subtitle1"
              className="text-base font-bold text-[#1b2233] sm:text-lg"
            >
              ${price}
            </Typography>
            {oldPrice && (
              <Typography
                component="span"
                variant="caption"
                className="text-slate-400 line-through"
              >
                ${oldPrice}
              </Typography>
            )}
          </Box>

          <Button
            variant="contained"
            disableElevation
            size="small"
            disabled={!inStock}
            startIcon={<ShoppingCartOutlinedIcon className="text-base!" />}
            className="rounded-lg bg-[#0f6b5a] px-3 py-1 text-xs font-semibold normal-case text-white hover:bg-[#0b5748] disabled:bg-slate-200 disabled:text-slate-400"
            // TODO: اربطها مع الـ cart (context / API)
          >
            Add
          </Button>
        </Box>
      </Box>
    </Card>
  );
}