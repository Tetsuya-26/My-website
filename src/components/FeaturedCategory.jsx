import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const categories = [
  { label: "Food", image: assets.dogFood },
  { label: "Toys", image: assets.toys },
  { label: "Grooming", image: assets.grooming },
  { label: "Accessories", image: assets.accessories },
];

const FeaturedCategory = () => {
  return (
    <section className="text-gray-800 body-font bg-white py-10">
      <div className="px-4 sm:px-6 lg:px-8">
      <motion.h1
  className="md:text-5xl text-4xl font-bold mb-10 text-center text-gray-800"
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.05, // delay between letters
      },
    },
  }}
>
  {"Featured Categories".split("").map((char, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.h1>


        <div className="flex flex-wrap justify-center gap-20 lg:py-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.label}
              className="rounded-xl shadow-lg overflow-hidden p-6 bg-white cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="block relative h-48 w-48 mx-auto overflow-hidden rounded-md"
              >
                <img
                  alt={category.label}
                  className="h-full w-full object-cover"
                  src={category.image}
                />
              </motion.div>

              <div className="mt-5 text-center">
                <button className="w-full px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-lg font-medium transition-all">
                  {category.label}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategory;
