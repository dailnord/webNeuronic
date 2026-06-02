import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink, useLocation, useNavigate, Navigate } from 'react-router-dom'
import About from './components/about/About'
import Products from './components/products/Products'
import Contact from './components/contact/Contact'
import logoEmpresa from './components/img/logo-empresa.svg'
import navImg from './components/img/img_nav.png'
import flechaIzq from './components/img/flecha_izq.svg'
import flechaDer from './components/img/flecha_derecha.svg'
import Categoria_1 from './components/categorias/Categoria_1'
import Categoria_2 from './components/categorias/Categoria_2'
import Prod_1 from './components/products/Prod_1'
import Prod_2 from './components/products/Prod_2'
import Prod_3 from './components/products/Prod_3'
import Prod_4 from './components/products/Prod_4'
import Prod_5 from './components/products/Prod_5'

const menuItems = [
  { label: "Sobre Nosotros", path: "/about" },
  { label: "Productos", path: "/products" },
  { label: "Contactos", path: "/contact" }
]

function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const currentIndex = menuItems.findIndex(item => {
    if (item.path === "/products") {
      return location.pathname.startsWith("/products") || location.pathname.startsWith("/categorias")
    }
    return location.pathname.startsWith(item.path)
  })

  const goPrev = () => {
    if (currentIndex > 0) navigate(menuItems[currentIndex - 1].path)
  }

  const goNext = () => {
    if (currentIndex < menuItems.length - 1 && currentIndex !== -1) navigate(menuItems[currentIndex + 1].path)
  }

  return (
    <section id="navbar" className='navbar'>
      <nav className="navbar-container">
        <div className="navImg">
          <img src={navImg} alt="Logo" className="nav-img" />
        </div>
        <div className="logo-section">
          <img src={logoEmpresa} alt="Logo" className="logo-img" />
        </div>
        <div className="nav-links-bg">
          {isMobile ? (
            <div className="nav-links nav-links-mobile">
              {/* Flecha Izquierda: Solo aparece si currentIndex es MAYOR a 0 */}
              {currentIndex > 0 && (
                <button onClick={goPrev} className="nav-arrow">
                  <img src={flechaIzq} alt="Anterior" width="65" height="65" />
                </button>
              )}
              
              {currentIndex !== -1 && (
                <NavLink to={menuItems[currentIndex].path} className="active">
                  {menuItems[currentIndex].label}
                </NavLink>
              )}
              
              {/* Flecha Derecha: Solo aparece si estás en una opción válida Y no es la última */}
              {currentIndex !== -1 && currentIndex < menuItems.length - 1 && (
                <button onClick={goNext} className="nav-arrow">
                  <img src={flechaDer} alt="Siguiente" width="65" height="65" />
                </button>
              )}
            </div>
          ) : (
            <div className="nav-links">
              {menuItems.map(item => (
                <NavLink key={item.path} to={item.path}>{item.label}</NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Navigate to="/products" replace />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/categorias/Categoria_1' element={<Categoria_1/>}></Route>
          <Route path='/categorias/Categoria_2' element={<Categoria_2/>}></Route>
          <Route path='/products/Prod_1' element={<Prod_1/>}></Route>
          <Route path='/products/Prod_2' element={<Prod_2/>}></Route>
          <Route path='/products/Prod_3' element={<Prod_3/>}></Route>
          <Route path='/products/Prod_4' element={<Prod_4/>}></Route>
          <Route path='/products/Prod_5' element={<Prod_5/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
