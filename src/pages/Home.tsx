import ProductCard from "../components /ProductCard";
import { useState, useEffect } from "react";
import tea from "../assets/tea.jpg";
// import products from "../data/products.json";
import "./Home.css";

// const Home = () => {
//   const productsArray = products.products.data.items;
//   return (
//     <div className="productContainer">
//       {productsArray.map((product) => (
//         <ProductCard
//           image={tea}
//           name={product.name}
//           description={product.description}
//           price={product.price}
//           rating={product.rating}
//         />
//       ))}
//     </div>
//   );
// };

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
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </>
  );
};

export default Home;
