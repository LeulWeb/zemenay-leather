import { Typography } from "@material-tailwind/react";
import ProductCard from "../UI/ProductCard";

import { IoBagHandleOutline } from "react-icons/io5";

// importing images 

import one from '../../assets/transparent_bg_product/1.png'
import two from '../../assets/transparent_bg_product/2.png'
import three from '../../assets/transparent_bg_product/19.png'
import four from '../../assets/transparent_bg_product/4.png'






const ProductsSection = () => {
  return (
    <div className="bg-white">
      <Typography variant="h3" className="text-primary text-center py-5">
        Products
      </Typography>
      <div className=" w-10/12 mx-auto grid  md:grid-cols-4">
        <ProductCard  image = {one} />
        <ProductCard  image = {two} />
        <ProductCard  image= {three} />
        <ProductCard  image = {four}/>
      </div>
      {/* TODO: link to home page */}
      {/* TODO: diaplay multiple image*/}
      <div className="w-10/12 flex justify-end items-center space-x-3  py-5 ">
        <IoBagHandleOutline size={28} className="text-primary" />
        <Typography variant="lead">Explore more</Typography>
      </div>
    </div>
  );
};

export default ProductsSection;
