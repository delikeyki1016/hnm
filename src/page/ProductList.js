import React, { useEffect } from "react";
import Card from "../component/Card";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductList = () => {
    // const [productList, setProductList] = useState([]);
    // 컴바인된 리듀서에서 정의한 키값을 써줘야 함
    const productList = useSelector((state) => state.product.productList);

    const [query, setQuery] = useSearchParams(); // eslint-disable-line no-unused-vars

    const dispatch = useDispatch();

    const getProducts = () => {
        let searchQuery = query.get("q") || ""; // 쿼리값이 없는 경우는 "" 빈값을 넣어줌
        console.log("쿼리값은?", searchQuery);
        // let url = `https://my-json-server.typicode.com/delikeyki1016/hnm/products?q=${searchQuery}`;
        // let response = await fetch(url);
        // let data = await response.json();
        // console.log(data);
        // setProductList(data);
        // ==> 위의 로직을 미들웨어에서 정의하고, 미들웨어에서 정의한 함수를 불러서 콜해줌
        // 미들웨어를 거쳐서 리듀서로 간다.
        dispatch(productAction.getProducts(searchQuery));
    };
    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <Container>
            <Row>
                {productList && productList.length > 0 ? (
                    productList.map((menu) => (
                        <Col lg={3} md={4} sm={6}>
                            <Card item={menu} />
                        </Col>
                    ))
                ) : (
                    <div style={{ textAlign: "center" }}>
                        검색 결과가 없습니다.
                    </div>
                )}
            </Row>
        </Container>
    );
};

export default ProductList;
