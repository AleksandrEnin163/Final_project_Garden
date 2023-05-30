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

  return (
    <div>
      <ProductsList products={products_of_category.data} title={products_of_category.category?.title} />
    </div>
  )
}

export default ProductsOfCategoryPage