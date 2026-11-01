import { Avatar, Card, CardActionArea, Typography } from "@mui/material";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

export default function CtegoryItem({ category }) {
  const { name, image } = category;

  const count = category.productsCount ?? category.products?.length;

  return (
    <Card
      elevation={0}
      className="rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <CardActionArea
        className="flex h-full flex-col items-center gap-2 px-3 py-5 text-center sm:py-6"
        // TODO: component={Link} to={`/categories/${category.id}`}
      >
        <Avatar
          src={image}
          alt={name}
          className="h-12 w-12 bg-[#eef0fb] text-[#0f6b5a] sm:h-14 sm:w-14"
        >
          <CategoryOutlinedIcon />
        </Avatar>

        <Typography
          variant="subtitle2"
          className="w-full truncate text-sm font-bold text-[#1b2233]"
        >
          {name}
        </Typography>

        {typeof count === "number" && (
          <Typography variant="caption" className="text-[11px] text-slate-500">
            {count} Products
          </Typography>
        )}
      </CardActionArea>
    </Card>
  );
}