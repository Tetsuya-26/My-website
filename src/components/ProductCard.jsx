// ProductCard.jsx
import React from 'react';

const ProductCard = ({ image, title, price, category }) => {
  return (
   <div class="border border-gray-500/20 rounded-md gap-5 mx-6 my-6 px-3 py-2 bg-white max-w-56">
    <div class="group cursor-pointer flex items-center justify-center px-2">
        <img class="group-hover:scale-105 transition max-w-[160px]" src={image} alt="Product Image" />
    </div>
    
    <div class="text-gray-500/60 text-sm mt-4">
        <p>{category}</p>
        <a class="cursor-pointer text-gray-700 font-medium text-lg truncate w-full">{title}</a>

        <div class="flex items-end justify-between mt-2">
            <p class="md:text-xl text-base font-medium text-indigo-500">
                Php <span class="text-gray-500/60 md:text-sm text-xs">{price}</span>
            </p>
        </div>
    </div>
</div>
  );
};

export default ProductCard;
