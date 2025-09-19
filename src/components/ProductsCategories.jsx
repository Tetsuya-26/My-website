import React from 'react'
import ProductCard from './ProductCard';
import { Products } from '../assets/products';

const ProductsCategories= () => {
  return (
    <section className="text-gray-400 bg-white body-font">
      <div className="container px-10 py-24 mx-auto md:items-center">
        <div className="flex flex-wrap -m-4 justify-between relative">
          {Products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsCategories