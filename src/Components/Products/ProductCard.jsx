import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Rating } from '@mui/material';


export default function ProductCard({product}) {
  return (
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Rating  value={product.rate}/>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
