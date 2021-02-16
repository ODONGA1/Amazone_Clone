import { ListItemAvatar, useRadioGroup } from "@material-ui/core";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="./images/amazone-advert.jpg"
          alt=""
          className="checkout__ad"
        />

        <div>
          <h3> Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {/* Checkout products */}
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
