import CategoriesList from "../../components/CategoriesList/CategoriesList"
import DiscountForm from "../../components/DiscountForm/DiscountForm"
import Head from "../../components/Head/Head"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesList, fetchProductsList } from '../../asyncActions/requests';
import ProductsList from "../../components/ProductsList/ProductsList";

function MainPage() {
  const dispatch = useDispatch()
  const categories = useSelector(store => store.categories)
  const products = useSelector(store => store.products)

  useEffect(() => { dispatch(fetchCategoriesList()) }, [])
  useEffect(() => { dispatch(fetchProductsList()) }, [])

  const categories_main_page = categories.slice(0, 4)
  const products_sale_main_page = products.filter(elem => elem.discont_price !== null).slice(0, 3)
  return (
    <div>
        <Head />
        <CategoriesList categories={categories_main_page} title='Catalog' btn={true} />
        <DiscountForm />
        <ProductsList products={products_sale_main_page} title='Sale' />
    </div>
  )
}

export default MainPage