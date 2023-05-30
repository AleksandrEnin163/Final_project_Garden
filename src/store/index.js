import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsReducer } from './reducers/productsReducer';
import { productsOfCategoryReducer } from './reducers/productsOfCategoryReducer'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  products_of_category: productsOfCategoryReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))