import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  const dispatch = useDispatch();
 
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => dispatch(addItem({ id, name, price, imageUrl }))}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
