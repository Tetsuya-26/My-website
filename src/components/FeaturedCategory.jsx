import React from 'react'
import { assets } from '../assets/assets'

const FeaturedCategory = () => {
  return (
    <section class="text-gray-800 body-font">
    <div className="px-4 sm:px-6 lg:px-8">
                <h1 className="md:text-5xl text-4xl font-bold mb-6 text-center">
                Featured categories
                </h1>
        <div className="flex flex-wrap lg:justify-between gap-6 lg:py-6 lg:px-6 justify-center items-center">
        <div className="rounded-lg shadow-lg overflow-hidden py-6 px-6">
            <div className=" block relative h-48">
            <img alt="ecommerce" className=" h-full w-48 object-cover" src={assets.dogFood}/>
            </div>
            <div className="mt-4">
            <button className=" cursor-pointer block w-full px-7 py-2.5 text-center bg-indigo-500 hover:bg-indigo-600 rounded-full text-white title-font text-lg font-medium">Food</button>
            </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden py-6 px-6">
            <div className=" block relative h-48">
            <img alt="ecommerce" className=" h-full w-48 object-cover" src={assets.toys}/>
            </div>
            <div className="mt-4">
            <button className="cursor-pointer block w-full px-7 py-2.5 text-center bg-indigo-500 hover:bg-indigo-600 rounded-full text-white title-font text-lg font-medium">Toys</button>
            </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden py-6 px-6">
            <div className=" block relative h-48">
            <img alt="ecommerce" className=" h-full w-48 object-cover" src={assets.grooming}/>
            </div>
            <div className="mt-4">
            <button className="cursor-pointer block w-full px-7 py-2.5 text-center bg-indigo-500 hover:bg-indigo-600 rounded-full text-white title-font text-lg font-medium">Grooming</button>
            </div>
            
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden py-6 px-6">
            <div className=" block relative h-48">
            <img alt="ecommerce" className=" h-full w-48 object-cover" src={assets.accessories}/>
            </div>
            <div className="mt-4">
            <button className="cursor-pointer block w-full px-7 py-2.5 text-center bg-indigo-500 hover:bg-indigo-600 rounded-full text-white title-font text-lg font-medium">Accessories</button>
            </div>
        </div>
        </div>
    </div>
</section>
  )
}

export default FeaturedCategory;