import ProductCard from "../components /ProductCard";
import { useState, useEffect } from "react";
import tea from "../assets/tea.jpg";
// import products from "../data/products.json";
import { ProductType } from "../types/products";
import { getAllProducts } from "../api/productsApi";
import "./Home.css";

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
    <>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          _id={product._id}
          name={product.name}
          description={product.description}
          price={product.price}
          rating={product.rating}
          image={tea}
        />
      ))}
    </>
  );
};

export default Home;
