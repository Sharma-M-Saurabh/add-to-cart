import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, remove } from "../store/cartSlice";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  console.log("products", products);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  const handleRemoveAll = () => {
    dispatch(clearCart([]));
  };
  return (
    <div style={{ backgroundColor: "#e6e8fa" }}>
      <Container>
        <div className="d-flex justify-content-center align-items-center gap-3 p-3">
          <h3>Cart</h3>
          <Button variant="danger" onClick={handleRemoveAll}>
            Remove All
          </Button>
        </div>
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} md={6} lg={4} className="mb-4">
              <Card className="shadow-sm border-0 rounded-lg overflow-hidden" style={{padding : '10px',minHeight : "440px"}}>
                <Col md={4}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    className="rounded-3"
                    style={{
                      // objectFit: "cover",
                      height: "200px",
                      width: "100%",
                    }}
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title className="fw-bold text-dark">
                      {product.title}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      ${product.price}
                    </Card.Text>
                    <Button
                  variant="danger"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </Button>
                  </Card.Body>
                </Col>

                
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
