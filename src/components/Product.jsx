import React from "react";
import "../css/Product.css";

const Product = ({ product }) => {
  const { id, price, image, title, description } = product;

  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
        <p style={{ textAlign: "center", height: "50px" }}>{title}</p>
        <p style={{ textAlign: "center" }}>{price}₺</p>
      </div>

      <div className="flex-row">
        <div className="detail-button">Detayına Git</div>
      </div>
    </div>
  );
};

export default Product;
