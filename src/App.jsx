import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from './pages/Home'
import ProductPage from '@/Pages/ProductPage'
import  Navbar  from '@/components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App