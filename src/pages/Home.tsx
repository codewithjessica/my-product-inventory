import ProductCard from "../components /ProductCard";
import { useState, useEffect } from "react";
import tea from "../assets/tea.jpg";
// import products from "../data/products.json";
import { ProductType } from "../types/products";
import { getAllProducts } from "../api/productsApi";
import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        console.log(response.data.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        mt: "40px",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom color="#352315">
        <strong>Product List</strong>
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="top"
        maxWidth="80%"
        margin="auto"
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <ProductCard
              key={product._id}
              _id={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              rating={product.rating}
              image={tea}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
