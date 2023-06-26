import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductsList from '../../components/ProductsList/ProductsList'
import { fetchProductsOfCategoryList } from '../../asyncActions/requests'

function ProductsOfCategoryPage() {

  const { id } = useParams()
  const dispatch = useDispatch()
  const products_of_category = useSelector(store => store.products_of_category)

  useEffect(() => {
    dispatch(fetchProductsOfCategoryList(id))
  }, [])

  const title = products_of_category.data ? products_of_category.category.title : ''
  const data = products_of_category.data ? products_of_category.data : []

  return (
    <div>
      <ProductsList
        products={data}
        title={title}
        show_filter={true}
        show_discont_sort={true}
        location='category_products' />
    </div>
  )
}

export default ProductsOfCategoryPage