import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCartAction } from '../../store/reducers/cartReducer'
import s from './ProductItemInfoPage.module.css'

function ProductItemInfoPage() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    const base_url = "http://localhost:3333";

    useEffect(() => {
    fetch(`${base_url}/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const product_info = Object.assign({}, ...product)
    const { title, image, discont_price, price, description } = product_info
    const discount_value = Math.floor(100 - discont_price * 100 / price);

    const handleAddToCart = () => {
        dispatch(
          addToCartAction({
            title,
            price,
            discont_price,
            image,
            description,
            id,
          })
        );
      };

    return (
    <div className={s.product_info_container}>
        <h2>{title}</h2>
        <div className={s.product_img_details_container}>
            <img src={`${base_url}${image}`} alt={title}></img>
            <div className={s.product_details}>
                <div className={s.product_price}>
                    <p>{discont_price !== null ? discont_price : price}$</p>
                    {discont_price && <p>{price}$</p>}
                    {discont_price && <p>{-discount_value}%</p>}
                </div>
                <button onClick={handleAddToCart}>To cart</button>
                <h5>Description</h5>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductItemInfoPage