import React, { useEffect, useState } from "react";
import { fetchProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import { AccessTime } from "@mui/icons-material";
// import Rating from "@mui/material/Rating";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);

  const [searchProduct, setSearchProduct] = useState("");
  const [productList, setProductList] = useState([]);

  React.useEffect(() => {
    const filterProductData = products?.filter(
      (value) =>
        value?.title?.toLowerCase().includes(searchProduct?.toLowerCase()) ||
        value?.price?.toString().includes(searchProduct)
    );
    setProductList(filterProductData);
  }, [searchProduct, products]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div style={{ backgroundColor: "#e6e8fa" }}>
      <Container>
        <div className="d-flex justify-content-center align-items-center gap-3 p-3">
          <h3>Products</h3>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 w-25"
            aria-label="Search"
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </div>
        <Row>
          {productList.map((product) => (
            <Col xs={12} sm={6} md={4} className="mb-4" key={product.id}>
              <Card className="shadow-sm border-0 rounded-lg overflow-hidden" style={{padding : '20px',minHeight : "280px"}}>
            <Row>
              <Col md={4}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  className="rounded-3"
                  style={{ objectFit: "contain", height: "200px", width: "100%" }}
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="fw-bold text-dark">{product.title}</Card.Title>
                  <Card.Text className="text-muted">${product.price}</Card.Text>
                  <Button
                    variant="primary"
                    className="w-100 rounded-pill"
                    onClick={() => handleAdd(product)}
                    style={{
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
              {/* <Paper elevation={3}>
                <img src={product.image} alt={product.title} className="img" />
                <Box paddingX={1}>
                  <Typography variant="subtitle1" component="h2">
                    {product.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <AccessTime sx={{ width: 12.5 }} />
                    <Typography variant="body2" component="p" marginLeft={0.5}>
                      ${product.price}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "centre",
                    }}
                    marginTop={3}
                  >
                    <Rating
                      name="half-rating-read"
                      size="small"
                      defaultValue={3.5}
                      precision={0.5}
                      readOnly
                    />
                    <Typography variant="body2" component="p" marginLeft={0.5}>
                      4.5 Rating
                    </Typography>
                    <Typography variant="body3" component="p" marginLeft={1.5}>
                      641 Reviews
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" component="h3" marginTop={0}>
                      $385
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="primary"
                  className="w-100 rounded-pill"
                  onClick={() => handleAdd(product)}
                  style={{
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Add to Cart
                </Button>
              </Paper> */}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Product;
