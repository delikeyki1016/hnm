import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery = query.get("q") || ""; // 쿼리값이 없는 경우는 "" 빈값을 넣어줌
        console.log("쿼리값은?", searchQuery);
        let url = `https://my-json-server.typicode.com/delikeyki1016/hnm/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

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
