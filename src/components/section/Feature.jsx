// import { FeatureCard } from "../UI/FeatureCard"

import { Typography } from "@material-tailwind/react";
import bag from "../../assets/images/two_bag_remove_bg.png";

// icons

import { SlBadge } from "react-icons/sl";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoShieldOutline } from "react-icons/io5";

const Feature = () => {
  return (
    <div className="w-full bg-gray-100 text-center py-7">
      <section className="w-10/12 mx-auto">
        <Typography variant="h3" className="py-5 text-primary">
          Features
        </Typography>

        {/* section */}

        <div className=" w-full grid md:grid-cols-3 py-5">
          <div className=" text-center flex items-center justify-center flex-col p-5">
            <SlBadge size={32} className="text-primary" />
            <Typography variant="h6" className="py-5">
              Quality Materials
            </Typography>
            <Typography variant="paragraph">
              Our bags are meticulously crafted using the finest materials,
              guaranteeing durability, elegance, and a touch of luxury.
            </Typography>
          </div>
          <div className=" text-center flex items-center justify-center flex-col p-5">
            <MdOutlineDesignServices size={32} className="text-primary" />
            <Typography variant="h6" className="py-5">
              Variety Designs
            </Typography>
            <Typography variant="paragraph">
              Discover a wide array of designs, from classic to contemporary,
              ensuring there&apos;s a perfect bag for every individual style and
              occasion.
            </Typography>
          </div>
          <div className=" text-center flex items-center justify-center flex-col p-5">
            <IoShieldOutline size={32} className="text-primary" />
            <Typography variant="h6" className="py-5">
              Durability
            </Typography>
            <Typography variant="paragraph">
              Engineered for resilience, our bags boast robust construction and
              premium materials, promising longevity and reliability for all
              your adventures.
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
