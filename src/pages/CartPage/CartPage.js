import { useState } from "react";
import s from "./CartPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import {
  clearCartAction,
  resetCounterAction,
} from "../../store/reducers/cartReducer";

function CartPage() {
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart);
  const total_sum = cart.reduce(
    (accum, elem) =>
      accum +
      elem.count * (elem.discont_price ? elem.discont_price : elem.price),
    0
  );

  return (
    <div className={s.shopping_cart_container}>
      <h2>Shopping cart</h2>
      <Link to='/products/all' style={{textDecoration: 'none'}}>
        <div className={s.back_to_store_link}>
          <p>Back to the store&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></p>
        </div>
      </Link>
      <div className={s.cart_list_order_details_container}>
        <div className={s.cart_list_container}>
          {cart.length !== 0 ? 
            cart.map(elem => <CartItem key={elem.id} {...elem} />)
          : <p className={s.empty_message}>Cart is empty</p>}
        </div>
        <div className={s.order_details_container}>
          <h3>Order details</h3>
          <div className={s.total_sum}>
            <p>Total</p>
            <p>{total_sum}<span> $</span></p>
          </div>
          <input placeholder={'Phone number'} name={'phone'} pattern={'[+]{1}[0-9]{11}'} required />
          <button>Order</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage