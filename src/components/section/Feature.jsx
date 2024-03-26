// import { FeatureCard } from "../UI/FeatureCard"

import { Typography } from "@material-tailwind/react";
import bag from "../../assets/images/two_bag_remove_bg.png";

// icons

import { SlBadge } from "react-icons/sl";

const Feature = () => {
  return (
    <div className="w-full  text-center py-7">
      <section className="w-10/12 mx-auto">
        <Typography variant="h3" className="py-5">
          Features
        </Typography>
        {/* <Typography variant="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit
          vel magnam. Eum commodi, mollitia deserunt sed qui id ab ipsum cum
          atque facilis possimus ex, asperiores harum quam repudiandae.
        </Typography> */}

        {/* section */}

        <div className=" w-full grid md:grid-cols-3 py-5">
          <div className=" text-center flex items-center justify-center flex-col p-5">
            <SlBadge size={50} />
            <Typography variant="h4" className="py-5">
              Quality
            </Typography>
            <Typography variant="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              obcaecati consequatur autem, saepe aliquid eaque magni rem dolore
              nostrum. Tempore totam optio nesciunt reprehenderit iure adipisci
              est molestias eos aspernatur!
            </Typography>
          </div>
          <div className=" text-center flex items-center justify-center flex-col p-5">
            <SlBadge size={50} />
            <Typography variant="h4" className="py-5">
              Quality
            </Typography>
            <Typography variant="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              obcaecati consequatur autem, saepe aliquid eaque magni rem dolore
              nostrum. Tempore totam optio nesciunt reprehenderit iure adipisci
              est molestias eos aspernatur!
            </Typography>
          </div>
          <div className=" text-center flex items-center justify-center flex-col p-5">
            <SlBadge size={50} />
            <Typography variant="h4" className="py-5">
              Quality
            </Typography>
            <Typography variant="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              obcaecati consequatur autem, saepe aliquid eaque magni rem dolore
              nostrum. Tempore totam optio nesciunt reprehenderit iure adipisci
              est molestias eos aspernatur!
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
