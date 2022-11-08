import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className={`product-card`}>
      <div className="card-img">
        <img
          src={props.data.img}
          alt=""
        />
      </div>
      <div className="text-content">
        <h3>{props.data.title}</h3>
        <p>{props.data.content}</p>
        <button onClick={props.handleClick}>Köp</button>
      </div>
    </div>
  );
};

export default ProductCard;
