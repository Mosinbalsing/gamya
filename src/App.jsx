import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/Pages/Home'
import ProductPage from '@/Pages/ProductPage'
import  Navbar  from '@/components/Navbar'
import Footer from './components/Footer'
import ContactSection from './Pages/Contact'
import Necklaces from './Pages/Necklaces'
import Earrings from './Pages/Earrings'
import About from './Pages/About'
import Bangels from './Pages/Bangels'
import Anklets from './Pages/Anklets'

function App() {
  return (
    <Router>
      <Navbar/>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/necklaces" element={<Necklaces/>} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/anklets" element={<Anklets />} />
          <Route path="/bangels" element={<Bangels />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactSection/>} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </MainLayout>
      <Footer/>
    </Router>
  )
}

export default App