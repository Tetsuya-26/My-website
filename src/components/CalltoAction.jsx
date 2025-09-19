import React from 'react';
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const text = "Give Your Pets the Sparkle They Deserve!";

// Animation variants for each letter
const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const HomeLayout = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around text-sm w-full px-6 md:px-14 bg-white overflow-hidden">

      {/* Text Section */}
      <motion.div
        className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="md:text-5xl text-4xl font-bold text-gray-800 text-center md:text-left"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariant}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <p className="leading-relaxed mt-4 text-gray-600 max-w-md text-center md:text-left">
          Visit Shimmering Paws – Where Every Tail Wags with Joy!
          Shop now for premium pet products, expert grooming, and a whole lot of love.
        </p>

        <motion.div
          className="flex items-center gap-4 mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button
            type="button"
            aria-label="getStarted"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-7 py-2.5 text-white rounded-full active:scale-95 transition-all"
          >
            <img src={assets.boneIcon} alt="Bone Icon" className="w-5 h-5" />
            Get started
          </button>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.img
        className="max-w-[400px] mt-10 sm:mt-0"
        src={assets.logoIcon}
        alt="logo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};

export default HomeLayout;
