import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;

  console.log("Add Cart: ", cart);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const course = cart[i];
    total = total + course.price;
  }
  return (
    <div className="container">
      <h5>Order Sumary</h5>
      <p>Items Ordered: {cart.length}</p>
      <p>Total: {total}</p>

      <Link to="/check-out">
        <button className>Check Order</button>
      </Link>
    </div>
  );
};

export default Cart;
