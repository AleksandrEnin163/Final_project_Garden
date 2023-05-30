import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './pages/MainPage/MainPage'
import AllCategoriesPage from './pages/AllCategoriesPage/AllCategoriesPage'
import ProductItemInfoPage from './pages/ProductItemInfoPage/ProductItemInfoPage'
import ProductsOfCategoryPage from './pages/ProductsOfCategoryPage/ProductsOfCategoryPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/categories/all' element={<AllCategoriesPage />} />
          <Route path='/products/:id' element={<ProductItemInfoPage />} />
          <Route path='/categories/:id' element={<ProductsOfCategoryPage />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App