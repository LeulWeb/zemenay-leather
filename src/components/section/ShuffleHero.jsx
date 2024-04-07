import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { FiPhoneCall } from "react-icons/fi";

// TODO: add more image on shuffle animation up to 16
// image imports

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

import logo from "../../assets/logo/Zemenay_final_logo_svg-08.png";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-5 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Fashion meets comfort
        </span>
        <div className="flex w-full justify-start">
          <img src={logo} alt="logo" className="w-52"></img>
        </div>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          "Indulge in Timeless Elegance with Zemenay Leather - Where Quality
          Meets Craftsmanship."
        </p>
        <a href="tel:+25192 192 3881">
          <button className="bg-primary text-white font-medium py-2 px-4 rounded transition-all  active:scale-95">
            <div className="flex items-center space-x-3">
              <div>Call Us</div> <FiPhoneCall />
            </div>
          </button>
        </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: one,
  },
  {
    id: 2,
    src: two,
  },
  {
    id: 3,
    src: three,
  },
  {
    id: 4,
    src: four,
  },
  {
    id: 5,
    src: five,
  },
  {
    id: 6,
    src: six,
  },
  {
    id: 7,
    src: seven,
  },
  {
    id: 8,
    src: eight,
  },
  {
    id: 9,
    src: nine,
  },
  {
    id: 10,
    src: ten,
  },
  {
    id: 11,
    src: eleven,
  },
  {
    id: 12,
    src: twelve,
  },
  {
    id: 13,
    src: thirteen,
  },
  {
    id: 14,
    src: fourteen,
  },
  {
    id: 15,
    src: fifteen,
  },
  {
    id: 16,
    src: sixteen,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full bg-center"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 ">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
