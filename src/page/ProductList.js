import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { Col, Container, Row } from "react-bootstrap";

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        let url = "http://localhost:5000/products";
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container>
            <Row>
                {productList.map((menu) => (
                    <Col lg={3} md={4} sm={6}>
                        <Card item={menu} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
