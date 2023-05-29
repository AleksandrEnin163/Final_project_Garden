import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CategoriesList from "../../components/CategoriesList/CategoriesList"
import { fetchCategoriesList } from '../../asyncActions/requests'

function AllCategoriesPage() {
    const dispatch = useDispatch()
    const categories = useSelector(store => store.categories)

    useEffect(() => { dispatch(fetchCategoriesList()) }, [])
  return (
    <div>
        <CategoriesList categories={categories} title='Categories' btn={false} />
    </div>
  )
}

export default AllCategoriesPage