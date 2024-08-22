import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
    // console.log(item);
    const navigate = useNavigate();

    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };

    return (
        <div key={item.id} className="product" onClick={showDetail}>
            <img src={item?.img} alt="" className="img-fluid" />
            <div>{item?.choice === true ? "Concious Choice" : ""}</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div>{item?.new === true ? "신제품" : ""}</div>
        </div>
    );
};

export default Card;
