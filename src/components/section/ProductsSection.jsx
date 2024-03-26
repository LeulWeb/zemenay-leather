import { Typography } from "@material-tailwind/react"

import { CarouselSection } from "./CarouselSection"
import { EcommerceCard } from "../UI/FeatureCard"

import two_bag from "../../assets/images/two_bag_remove_bg.png"
import one_bag from "../../assets/images/one-brown-back-bag-removebg-preview.png"

const ProductsSection = () => {
  return (
    <div className=" my-7 text-center">
        <Typography variant="h3" className="my-5">Products</Typography>
      <section className="w-10/12 mx-auto flex space-x-5 ">
            <EcommerceCard  picture = {two_bag} />
            <EcommerceCard  picture = {one_bag} />
            <EcommerceCard  picture = {two_bag} />
            <EcommerceCard  picture = {two_bag} />
            <EcommerceCard  picture = {two_bag} />
            

   

      </section>

    </div>
  )
}

export default ProductsSection