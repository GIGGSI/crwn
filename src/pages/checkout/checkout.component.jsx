import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckoutPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} {...cartItem} />
      ))}
      <div className="total">
        <span>
          Total: $
          {cartItems.reduce(
            (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
            0
          )}
        </span>
      </div>
    </div>
  );
};

export default CheckoutPage;
