import axios from "axios";

// CRUD

// GET;
// GET all products

const PRODUCT_ENDPOINT = import.meta.env.VITE_BASE_URL;

export const getAllProducts = () => axios.get(PRODUCT_ENDPOINT);

// POST;
// Create a new product

interface ProductType {
  name: string;
  email: string;
  gitHubUsername: string;
  blogUrl: string;
}

export const createProduct = (productData: ProductType) =>
  axios.post(PRODUCT_ENDPOINT, productData);

// PUT / PATCH;

// DELETE;
export const deleteProduct = (id: string) => axios.delete(`${PRODUCT_ENDPOINT}/${id}`);