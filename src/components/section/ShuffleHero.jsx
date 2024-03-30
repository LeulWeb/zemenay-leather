import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// TODO: add more image on shuffle animation up to 16
// image imports

import a from "../../assets/images/a.jpg";
import b from "../../assets/images/b.jpg";
import c from "../../assets/images/photo_2024-03-26_23-58-04.jpg";
import d from "../../assets/images/photo_2024-03-26_23-57-55.jpg";
import e from "../../assets/images/photo_2024-03-26_23-57-59.jpg";
import f from "../../assets/images/photo_2024-03-26_23-57-45.jpg";
import g from "../../assets/images/photo_2024-03-26_23-57-04.jpg";
import h from "../../assets/images/photo_2024-03-26_23-57-05.jpg";
import i from "../../assets/images/photo_2024-03-26_23-57-12.jpg";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Fashion meets comfort
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-primary">
          Zemenay Leather
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-primary text-white font-medium py-2 px-4 rounded transition-all  active:scale-95">
          Contact Us
        </button>
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
    src: a,
  },
  {
    id: 2,
    src: b,
  },
  {
    id: 3,
    src: c,
  },
  {
    id: 4,
    src: d,
  },
  {
    id: 5,
    src: e,
  },
  {
    id: 6,
    src: f,
  },
  {
    id: 7,
    src: g,
  },
  {
    id: 8,
    src: h,
  },
  {
    id: 9,
    src: i,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
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
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
