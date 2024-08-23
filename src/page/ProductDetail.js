import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

const ProductDetail = () => {
    // const param = useParams();
    // console.log("param", param); //{id: 1}
    let { id } = useParams();
    console.log("id?", id);

    const [product, setProduct] = useState(null);

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/delikeyki1016/hnm/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProduct(data);
    };
    // API 호출
    useEffect(() => {
        getProductDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Row>
                <Col className="product-detail-img">
                    <img src={product?.img} alt={product?.title} />
                </Col>
                <Col className="product-detail-info">
                    <div>{product?.title}</div>
                    <div>￦{product?.price.toLocaleString()}</div>
                    <div>
                        {product?.new ? (
                            <Badge pill bg="danger">
                                New
                            </Badge>
                        ) : (
                            ""
                        )}
                    </div>
                    <Dropdown className="mt-2">
                        <Dropdown.Toggle
                            size="sm"
                            variant="secondary"
                            id="dropdown-basic"
                        >
                            사이즈 선택
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product?.size.map((size) => (
                                <Dropdown.Item href="#/action-1">
                                    {size}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark" className="mt-3 w-50">
                        추가
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
