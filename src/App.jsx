import { Footer } from "./components/layout/Footer"
import {Routes , Route} from 'react-router-dom'
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <div className=" min-h-screen flex flex-col overflow-x-hidden">
      {/* <h1>Navbar</h1> */}
      <main className="flex-1">
        <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/product" element={<Product/>} />
            <Route  path="/about" element={<About/>} />
            <Route  path="/contact" element={<Contact/>} />
        </Routes>
      </main>
       <div className="w-10/12 mx-auto">
       <Footer/>
       </div>
    </div>
  )
}

export default App