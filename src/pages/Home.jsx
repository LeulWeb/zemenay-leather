

import { ContactForm } from "../components/section/ContactSection"
import Feature from "../components/section/Feature"

import ProductsSection from "../components/section/ProductsSection"
import ShuffleHero from "../components/section/ShuffleHero"


const Home = () => {
  return (
    <div > 
        {/* <Hero/> */}
        <ShuffleHero/>
        <Feature/>
        <ProductsSection/>
        <ContactForm/>
    </div>
  )
}

export default Home