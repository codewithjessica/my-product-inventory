import { useFormik } from "formik";
import * as Yup from "yup";
import { createProduct } from "../api/productsApi";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { brown } from "@mui/material/colors";

function AddProduct() {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: 0,
      rating: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(
          /^[a-zA-Z0-9 ]+$/,
          "Name must be letters, dashes, numbers, or spaces"
        )
        .required("Required"),
      description: Yup.string()
        .min(5, "Must be at least 5 characters")
        .max(500, "Must be at most 100 characters")
        .required("Required"),
      price: Yup.number().min(0, "Cannot not be a negative number").required(),
      rating: Yup.number()
        .min(0, "The rating must between 0 to 5")
        .max(5, "The rating must between 0 to 5")
        .required(),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await createProduct(values);
        console.log("Product added successfully", response.data);
        resetForm({});
      } catch (error) {
        console.error("Failed to add product", error);
      } finally {
        resetForm({});
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          color="#352315"
          sx={{ marginBottom: "20px" }}
        >
          Add Product
        </Typography>

        <TextField
          id="name"
          name="name"
          label="Product Name"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ marginBottom: "30px" }}
        />

        <TextField
          id="description"
          name="description"
          label="Product Description"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.description}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          sx={{ marginBottom: "30px" }}
        />

        <TextField
          id="price"
          name="price"
          label="Price"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.price}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          sx={{ marginBottom: "30px" }}
        />

        <TextField
          id="rating"
          name="rating"
          label="Rating (out of 5)"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.rating}
          error={formik.touched.rating && Boolean(formik.errors.rating)}
          helperText={formik.touched.rating && formik.errors.rating}
          sx={{ marginBottom: "30px" }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            backgroundColor: "brown",
            "&:hover": { backgroundColor: "#352315" },
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default AddProduct;
