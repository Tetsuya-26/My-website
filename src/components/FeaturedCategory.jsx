import React from 'react'
import { assets } from '../assets/assets'

const FeaturedCategory = () => {
  return (
    <section class="text-gray-800 body-font">
    <div className="px-4 sm:px-6 lg:px-8">
                <h1 className="md:text-5xl text-4xl font-bold mb-6 text-center">
                Featured categories
                </h1>
        <div className="flex flex-wrap justify-between gap-6 lg:py-6 lg:px-6">
        <div className="rounded-lg shadow-lg overflow-hidden">
            <div className=" block relative h-48">
            <img alt="ecommerce" className=" h-full w-48 object-cover" src={assets.dogFood}/>
            </div>
            <div className="mt-4">
            <h2 className=" text-center text-gray-900 title-font text-lg font-medium">Food</h2>
            </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden">
            <div className=" block relative h-48">
            <img alt="ecommerce" className=" h-full w-48 object-cover" src={assets.toys}/>
            </div>
            <div className="mt-4">
            <h2 className="text-center text-gray-900 title-font text-lg font-medium">Toys</h2>
            </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden">
            <div className=" block relative h-48">
            <img alt="ecommerce" className=" h-full w-48 object-cover" src={assets.grooming}/>
            </div>
            <div className="mt-4">
            <h2 className="text-center text-gray-900 title-font text-lg font-medium">Grooming</h2>
            </div>
            
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden">
            <div className=" block relative h-48">
            <img alt="ecommerce" className=" h-full w-48 object-cover" src={assets.accessories}/>
            </div>
            <div className="mt-4">
            <h2 className="text-center text-gray-900 title-font text-lg font-medium">Accessories</h2>
            </div>
        </div>
        </div>
    </div>
</section>
  )
}

export default FeaturedCategory