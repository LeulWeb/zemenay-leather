import { Typography } from "@material-tailwind/react";

import bag from "../assets/images/two_bag_remove_bg.png";
import { Gallery } from "../components/UI/Gallery";

const Product = () => {
  return (
    <main>
      <section className="w-10/12 mx-auto p-7 md:mt-20">
        {/* hero in products */}
        <div className="w-full md:w-10/12 bg-gray-300 mx-auto rounded-2xl p-5 grid md:grid-cols-2 place-items-center">
          <div>
            <Typography variant="h3" className="text-primary">
              Our Products
            </Typography>
            <Typography className="" variant="paragraph">
              Elevate your style with our exquisite collection of premium
              leather bags. Crafted with unparalleled attention to detail and
              the finest materials, each piece exudes timeless elegance and
              superior craftsmanship. From sleek and sophisticated to
              effortlessly chic, our bags are more than accessories—they&apos;re
              statements of refinement and taste. Experience the unmatched
              quality and sophistication
            </Typography>
          </div>

          {/* image */}

          <div className="md:-mt-28 md:-mr-48">
            <img src={bag} alt="" />
          </div>
        </div>
      </section>

      <section className="w-screen ">
        <div className="w-10/12 mx-auto py-5">
          <Typography variant="h3" className="text-primary text-center py-5">
            Explore Our Product
          </Typography>

          <Gallery />
        </div>
      </section>
    </main>
  );
};

export default Product;
