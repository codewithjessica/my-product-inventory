import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface ProductCardProps {
  _id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
}
export default function ProductCard({
  _id,
  image,
  name,
  description,
  price,
  rating,
}: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating}/5
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
      </CardActions> */}
      <Link to={`/product/${_id}`}>
        <Button size="small">Learn More</Button>
      </Link>
    </Card>
  );
}
