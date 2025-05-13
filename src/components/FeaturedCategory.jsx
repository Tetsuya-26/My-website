import React from 'react'
import { assets } from '../assets/assets'

const FeaturedCategory = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
                <h1 className="text-3xl font-medium mb-6">
                Featured categories
                </h1>
        <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={assets.dogFood}/>
            </a>
            <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">Food</h2>
            </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={assets.toys}/>
            </a>
            <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">Toys</h2>
            </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={assets.grooming}/>
            </a>
            <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">Grooming</h2>
            </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={assets.accessories}/>
            </a>
            <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">Accessories</h2>
            </div>
        </div>
        </div>
    </div>
</section>
  )
}

export default FeaturedCategory