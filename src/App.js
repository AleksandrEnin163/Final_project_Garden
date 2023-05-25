import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './pages/MainPage/MainPage'

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App