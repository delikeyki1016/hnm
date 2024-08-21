import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    // const param = useParams();
    // console.log("param", param); {id: 1}
    const { id } = useParams();
    return <div>ProductDetail {id}</div>;
};

export default ProductDetail;
