import ProductItem from '../ProductItem/ProductItem';
import s from './ProductsList.module.css'

export default function ProductsList({ products, title }) {
  return (
    <div className={s.products_list_container}>
      <h2>{title}</h2>
      <div className={s.products_list_grid}>
        {products && products.map(elem => <ProductItem product={elem} key={elem.id} />)}
      </div>
    </div>
  )
}