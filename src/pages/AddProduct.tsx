import { Form, Container, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./AddProduct.css";
// import { createProduct } from "./api/productAPI";

function AddProduct() {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      rating: "",
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
        .max(100, "Must be at most 100 characters")
        .required(),
      price: Yup.number().min(0, "Cannot not be a negative number").required(),
      rating: Yup.number()
        .min(0, "The rating must between 0 to 5")
        .max(5, "The rating must between 0 to 5")
        .required(),
    }),
    onSubmit: (values) => {
      // Here, you handle what you want to do with the form data when the form is submitted.
      // For instance, sending the data to a server.
      console.log(values);
    },
    // onSubmit: async (values, { resetForm }) => {
    //   try {
    //     const response = await createProduct(values);
    //     console.log("Product added successfully", response.data);
    //   } catch (err) {
    //     console.error("Failed to add Product", err);
    //   } finally {
    //     resetForm({});
    //   }
    // },
  });

  return (
    <Container fluid className="addproduct-form">
      <Form method="post" action="#" onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Product Name: </Form.Label>
          <Form.Control
            id="name"
            name="name"
            type="text"
            placeholder="Enter product name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Form.Text className="text-muted">{formik.errors.name}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Description: </Form.Label>
          <Form.Control
            id="description"
            name="description"
            type="text"
            placeholder="Enter the description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <Form.Text className="text-muted">
              {formik.errors.description}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Price: </Form.Label>
          <Form.Control
            id="price"
            name="price"
            type="text"
            placeholder="Enter the price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <Form.Text className="text-muted">{formik.errors.price}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Rating: </Form.Label>
          <Form.Control
            id="Rating"
            name="rating"
            type="text"
            placeholder="Enter the rating between 0 to 5"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rating}
          />
          {formik.touched.rating && formik.errors.rating ? (
            <Form.Text className="text-muted">{formik.errors.rating}</Form.Text>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddProduct;

// const AddProduct = () => {
//     return <div>AddProduct</div>;
//   };

//   export default AddProduct;
