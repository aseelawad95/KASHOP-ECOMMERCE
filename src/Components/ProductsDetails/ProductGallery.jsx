import { Card, CardMedia } from "@mui/material";

export default function ProductGallery({ image, name }) {
  return (
    <Card
      variant="outlined"
      className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl md:sticky md:top-6 md:max-w-none"
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        className="h-full w-full object-cover"
      />
    </Card>
  );
}