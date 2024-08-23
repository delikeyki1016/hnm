import React from "react";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const Card = ({ item }) => {
    // console.log(item);
    const navigate = useNavigate();

    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };

    return (
        <div key={item.id} className="product" onClick={showDetail}>
            <img src={item?.img} alt={item?.title} className="img-fluid" />
            <div>{item?.choice === true ? "Concious Choice" : ""}</div>
            <div>{item?.title}</div>
            <div>￦{item?.price.toLocaleString()}</div>
            <div>
                {item?.new === true ? (
                    <Badge pill bg="danger">
                        New
                    </Badge>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Card;
