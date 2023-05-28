import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { addToCartAction } from '../../store/reducers/cartReducer';
import s from './ProductItem.module.css'

export default function ProductItem({ product }) {
  const { id, image, price, title, discont_price } = product
//   const dispatch = useDispatch();
  const base_url = "http://localhost:3333";
  const discount_value = Math.floor(100 - discont_price * 100 / price);

//   const addToCartHandler = (e) => {
//     e.preventDefault();
//     dispatch(addToCartAction(product))
//   }

  return (
    <NavLink to={`/products/${id}`} style={{textDecoration: 'none'}}>
      <div className={s.product_item}>
        <div className={s.product_image_btn}>
          <img src={`${base_url}${image}`} />
          <button>Add To Cart</button>
        </div>
        <div className={s.product_price_container}>
          <p>{discont_price !== null ? discont_price : price}$</p>
          {discont_price && <p>{price}$</p>}
          {discont_price && <p>{-discount_value}%</p>}
        </div>
        <p className={s.product_title}>{title}</p>
      </div>
    </NavLink>
  )
}