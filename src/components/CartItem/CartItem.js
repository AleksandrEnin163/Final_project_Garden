import s from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import {
  decrementCountAction,
  incrementCountAction,
  removeFromCartAction,
} from "../../store/reducers/cartReducer";

export default function CartItem({
  id,
  title,
  image,
  count,
  discont_price,
  price,
}) {
  const imageUrl = "http://localhost:3333/" + image;
  const dispatch = useDispatch();

  const incrOnclick = () => {
    dispatch(incrementCountAction(id));
  };
  const decrOnclick = () => {
    dispatch(decrementCountAction(id));
  };
  const removeOnclick = () => {
    dispatch(removeFromCartAction(id));
  };

  return (
    <div className={s.cart_item_container}>
        <img src={imageUrl} alt={title}></img>
        <div className={s.title_counter_container}>
            <p>{title}</p>
            <div className={s.counter}>
                <button onClick={decrOnclick}>-</button>
                <p>{count}</p>
                <button onClick={incrOnclick}>+</button>
            </div>
        </div>
        <div className={s.price_cross_container}>
            <RxCross2 className={s.close_btn} onClick={removeOnclick} />
            <div className={s.price_container}>
                <p>{discont_price ? discont_price : price}$</p>
                {discont_price && <p>{price}$</p>}
            </div>
        </div>
    </div>
  );
}