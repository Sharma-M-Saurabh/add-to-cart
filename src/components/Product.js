import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../store/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const Product = () => {

  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);

  const [searchProduct, setSearchProduct] = useState("")
  const [productList, setProductList] = useState([]);

  React.useEffect(() => {
    const filterProductData = products?.filter(value =>
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
    <>
      <Container>
        <div className='d-flex justify-content-center align-items-center gap-3 p-3'>
          <h3 >Products</h3>
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
            <Col xs={12} className="mb-4" key={product.id}>
              <Card>
                <Row>
                  <Col md={4}>
                    <Card.Img variant="top" src={product.image} alt={product.title} height="200px" width="100px" />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.price}</Card.Text>
                      <Button variant="primary" onClick={() => handleAdd(product)}>
                        Add to cart
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>

  )
}

export default Product