const defaultState = {}

const GET_CATEGORY_PRODUCTS = 'GET_CATEGORY_PRODUCTS'

export const productsOfCategoryReducer = (state = defaultState, action) => {
    switch (action.type) {
      case GET_CATEGORY_PRODUCTS:
        return {...action.payload}

      default:
        return state;
    }
}        

export const getProductsOfCategoryAction = (payload) => ({ type: GET_CATEGORY_PRODUCTS, payload })