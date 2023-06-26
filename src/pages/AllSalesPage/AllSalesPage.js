import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductsList from "../../components/ProductsList/ProductsList"
import { fetchProductsList } from '../../asyncActions/requests'

function AllSalesPage() {
    const dispatch = useDispatch()
    const products = useSelector(store => store.products)
    const products_on_sale = products.filter(elem => elem.discont_price !== null)

    useEffect(() => { dispatch(fetchProductsList()) }, [])
  return (
    <div>
        <ProductsList products={products_on_sale}
                      title='Products with sale'
                      show_filter={true}
                      show_discont_sort={false}
                      location='all_sales' />
    </div>
  )
}

export default AllSalesPage