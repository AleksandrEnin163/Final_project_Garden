import CategoriesList from "../../components/CategoriesList/CategoriesList"
import DiscountForm from "../../components/DiscountForm/DiscountForm"
import Head from "../../components/Head/Head"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesList } from '../../asyncActions/requests';

function MainPage() {
  const dispatch = useDispatch()
  const categories = useSelector(store => store.categories)

  useEffect(() => { dispatch(fetchCategoriesList()) }, [])

  const categories_main_page = categories.slice(0, 4)
  return (
    <div>
        <Head />
        <CategoriesList categories={categories_main_page} title='Catalog' btn={true} />
        <DiscountForm />
    </div>
  )
}

export default MainPage