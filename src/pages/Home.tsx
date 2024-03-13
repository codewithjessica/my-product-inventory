import ProductCard from "../components /ProductCard";
import tea from "../assets/tea.jpg";
import products from "../data/products.json";

const Home = () => {
  const productsArray = products.products.data.items;
  return (
    <>
      {productsArray.map((product) => (
        <ProductCard
          image={tea}
          name={product.name}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </>
  );
};

export default Home;
