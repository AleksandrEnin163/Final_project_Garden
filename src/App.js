import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './pages/MainPage/MainPage'
import AllCategoriesPage from './pages/AllCategoriesPage/AllCategoriesPage'
import ProductItemInfoPage from './pages/ProductItemInfoPage/ProductItemInfoPage'
import ProductsOfCategoryPage from './pages/ProductsOfCategoryPage/ProductsOfCategoryPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import AllProductsPage from './pages/AllProductsPage/AllProductsPage'
import AllSalesPage from './pages/AllSalesPage/AllSalesPage'
import CartPage from './pages/CartPage/CartPage'

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/categories/all' element={<AllCategoriesPage />} />
          <Route path='/products/all' element={<AllProductsPage />} />
          <Route path='/sales/all' element={<AllSalesPage />} />
          <Route path='/products/:id' element={<ProductItemInfoPage />} />
          <Route path='/categories/:id' element={<ProductsOfCategoryPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App