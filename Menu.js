import React from "react";
import image from "./view.jpg";
import { motion } from 'framer-motion';
const SlideRight = (delay) => {
  return {
    initial: {
      x: "100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      }
    }
  }
}
const Menu = () => {
  return (
    <div id="menu">
      <div className="bg-black  gap-4 flex flex-row-reverse justify-center items-center mt-2">
        <div>
          <motion.img
          variants={SlideRight(0.1)}
          initial="initial"
          whileInView="animate"
            src={image}
            alt="image"
          />
        </div>
        <div>
          <h1 className="text-white text-6xl font-extrabold font-mono text-center mb-10 ">
            MENU
          </h1>
          <p className="font-mono text-white text-2xl ml-16 mr-16">
            In every spoonful of Truffle Risotto, discover the whispers of an
            enchanted forest, where each grain of rice tells a story of earth's
            hidden magic.
          </p>
          <button
            className="bg-white text-black p-4 hover:bg-black border-black border-2  hover:border-white border-solid hover:text-white font-mono ml-[500px] mt-10 text-xl"
            onClick={() => (window.location.href = "/mainmenu")}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;