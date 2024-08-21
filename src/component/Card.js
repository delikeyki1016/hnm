import React from "react";

const Card = ({ item }) => {
    console.log(item);
    return (
        <div key={item.id} className="product">
            <img src={item?.img} alt="" className="img-fluid" />
            <div>{item?.choice === true ? "Concious Choice" : ""}</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div>{item?.new === true ? "신제품" : ""}</div>
        </div>
    );
};

export default Card;
