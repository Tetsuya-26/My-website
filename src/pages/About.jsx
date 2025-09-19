import React from 'react';
import  { assets } from "../assets/assets"; // Assuming you have a Menuicon component
const About = () => {
  return (
    <div className="min-h-[60vh] md:min-h-[80vh] lg:min-h-screen bg-pink-50 py-10 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-12 border-b-4 border-pink-200 pb-4">
          About Shimmering Paws 🐾
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Image Section */}
          <img
           src={assets.logoIcon} alt="Logo"
            className="w-60 h-60 rounded-full object-cover shadow-lg"
          />

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Where Tails Wag and Hearts Shine!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At <span className="font-bold text-gray-800">Shimmering Paws</span>, we’re dedicated to creating a joyful, loving space
              for pets and their humans. From premium pet products to heartfelt customer care, we’re your go-to pet haven.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're spoiling your pup with the latest treats or picking out a cozy bed for your cat, 
              our team is here to help you celebrate the bond you share with your furry companions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
