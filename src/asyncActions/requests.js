import { getCategoriesAction } from "../store/reducers/categoriesReducer";
import { getProductsAction } from "../store/reducers/productsReducer";
import { getProductsOfCategoryAction } from '../store/reducers/productsOfCategoryReducer'


const base_url = "http://localhost:3333";

const categories_url = base_url + "/categories/all";
const products_url = base_url + "/products/all";
const products_of_category_url = base_url + '/categories/'

export const fetchCategoriesList = () => {
    return function (dispatch) {
      fetch(categories_url)
        .then(res => res.json())
        .then(data => dispatch(getCategoriesAction(data)))
    }
  }

  export const fetchProductsList = () => {
    return function (dispatch) {
      fetch(products_url)
        .then(res => res.json())
        .then(data => dispatch(getProductsAction(data)))
    }
  }

  export const fetchProductsOfCategoryList = (id) => {
    return function (dispatch) {
      fetch(`${products_of_category_url}${id}`)
        .then(res => res.json())
        .then(data => dispatch(getProductsOfCategoryAction(data)))
    }
  }