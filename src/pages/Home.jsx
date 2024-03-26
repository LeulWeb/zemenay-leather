import { ContactForm } from "../components/section/ContactSection"
import Feature from "../components/section/Feature"
import Hero from "../components/section/Hero"
import ProductsSection from "../components/section/ProductsSection"


const Home = () => {
  return (
    <div > 
        <Hero/>
        <Feature/>
        <ProductsSection/>
        <ContactForm/>
    </div>
  )
}

export default Home