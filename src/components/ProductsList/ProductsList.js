import ProductItem from '../ProductItem/ProductItem';
import s from './ProductsList.module.css'
import Filter from '../../components/Filter/Filter'

export default function ProductsList({ products, title, show_filter, show_discont_sort, location }) {
  products = products.filter((product) => product.showBySale && product.showByRange)
  return (
    <div className={s.products_list_container}>
      <h2>{title}</h2>
      {show_filter && <Filter show_discont_sort={show_discont_sort} location={location} />}
      <div className={s.products_list_grid}>
        {products && products.map(elem => <ProductItem product={elem} key={elem.id} />)}
      </div>
    </div>
  )
}