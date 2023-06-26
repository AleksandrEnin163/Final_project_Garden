import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductsList from "../../components/ProductsList/ProductsList"
import { fetchProductsList } from '../../asyncActions/requests'

function AllProductsPage() {
    const dispatch = useDispatch()
    const products = useSelector(store => store.products)

    useEffect(() => { dispatch(fetchProductsList()) }, [])
  return (
    <div>
        <ProductsList products={products}
                      title='All products'
                      show_filter={true}
                      show_discont_sort={true}
                      location='all_products' />
    </div>
  )
}

export default AllProductsPage