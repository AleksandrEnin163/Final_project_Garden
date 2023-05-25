import { getCategoriesAction } from "../store/reducers/categoriesReducer";

const base_url = "http://localhost:3333";

const categories_url = base_url + "/categories/all";

export const fetchCategoriesList = () => {
    return function (dispatch) {
      fetch(categories_url)
        .then(res => res.json())
        .then(data => dispatch(getCategoriesAction(data)))
    }
  }