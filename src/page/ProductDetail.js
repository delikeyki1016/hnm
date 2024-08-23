import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

const ProductDetail = () => {
    // const param = useParams();
    // console.log("param", param); //{id: 1}
    const { id } = useParams();
    console.log("id?", id);

    const [product, setProduct] = useState(null);
    const [size, setSize] = useState([]);

    const getProductDetail = async () => {
        try {
            let url = `http://localhost:5000/products/${id}`;
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            setProduct(data);
            setSize(data.size);
        } catch (e) {
            console.log("error msg", e);
        }
    };
    useEffect(() => {
        getProductDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="d-flex">
            <img
                src={product?.img}
                alt={product?.title}
                className="product-detail-img"
            />
            <div className="ms-3" style={{ flex: 1 }}>
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
                        {size.map((size) => (
                            <Dropdown.Item href="#/action-1">
                                {size}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="dark" className="mt-3 w-100">
                    추가
                </Button>
            </div>
        </div>
    );
};

export default ProductDetail;
