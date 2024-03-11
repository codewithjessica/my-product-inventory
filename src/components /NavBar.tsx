import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddProduct">Add Product</Link>
        </li>
        <li>
          <Link to="/EditProduct">Edit Product</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;