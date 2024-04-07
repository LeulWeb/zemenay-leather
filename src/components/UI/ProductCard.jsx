// TODO: remove ctx and tailwind merge
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import a from "../../assets/images/one-brown-back-bag-removebg-preview.png";
import { Typography } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
const ProductCard = ( {image } ) => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <TiltCard image={image} />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({image}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        backgroundImage: `url('/brown_bg.jpg')`,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4  grid place-content-center rounded-xl bg-white"
      >
        <img src={image} className="bg-cover w-full h-full " alt="" />
        <Typography variant="lead" className="text-center">
          Leather Bag
        </Typography>
        <Typography variant="small" className="text-center">
          High Quality hand crafted leather
        </Typography>

        <div className="flex justify-end w-10/12 pt-5">
          <Chip
            value="pure leather"
            size="sm"
            className="w-fit bg-secondary"
          ></Chip>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
