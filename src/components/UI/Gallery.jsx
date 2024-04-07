import one from "../../assets/transparent_bg_product/1.png";
import two from "../../assets/transparent_bg_product/2.png";
import three from "../../assets/transparent_bg_product/19.png";
import four from "../../assets/transparent_bg_product/4.png";
import five from "../../assets/transparent_bg_product/5.png";
import six from "../../assets/transparent_bg_product/6.png";
import seven from "../../assets/transparent_bg_product/7.png";
import eight from "../../assets/transparent_bg_product/8.png";
import nine from "../../assets/transparent_bg_product/9.png";
import ten from "../../assets/transparent_bg_product/10.png";
import eleven from "../../assets/transparent_bg_product/11.png";
import twelve from "../../assets/transparent_bg_product/12.png";
import thirteen from "../../assets/transparent_bg_product/21.png";
import fourteen from "../../assets/transparent_bg_product/20.png";
import fifteen from "../../assets/transparent_bg_product/15.png";
import sixteen from "../../assets/transparent_bg_product/16.png";
import ProductCard from "./ProductCard";

export function Gallery() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
      
        <ProductCard image={one} />
        <ProductCard image={two} />
        <ProductCard image={three} />
        <ProductCard image={four} />
        <ProductCard image={one} />
        <ProductCard image={two} />
        <ProductCard image={three} />
        <ProductCard image={four} />
        <ProductCard image={one} />
        <ProductCard image={two} />
        <ProductCard image={three} />
        <ProductCard image={four} />
        <ProductCard image={one} />
        <ProductCard image={two} />
        <ProductCard image={three} />
        <ProductCard image={four} />
      
    </div>
  );
}
