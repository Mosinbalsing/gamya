import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/Pages/Home'
import ProductPage from '@/Pages/ProductPage'
import  Navbar  from '@/components/Navbar'
import Footer from './components/Footer'
import ContactSection from './Pages/Contact'

function App() {
  return (
    <Router>
      <Navbar/>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactSection/>} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </MainLayout>
      <Footer/>
    </Router>
  )
}

export default App