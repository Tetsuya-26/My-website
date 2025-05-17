import React from 'react';
import { assets } from "../assets/assets"; // Assuming you have a Menuicon component


const Home = () => {
    return (
        <div class="flex flex-col sm:flex-row items-center justify-around text-sm  w-full px-14  bg-white">
        
        <div class="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
            <h2 class="md:text-5xl text-4xl font-bold text-gray-800">Give Your Pets<br/>the Sparkle They Deserve!</h2>
            <p className="leading-relaxed mt-4 justify-center">Visit Shimmering Paws – Where Every Tail Wags with Joy!
            Shop now for premium pet products, expert grooming, and a whole lot of love.</p>
            <div class="flex items-center gap-4 mt-6">
               
                <button type="button" aria-label="getStarted" className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-7 py-2.5 text-white rounded-full active:scale-95 transition-all">
                <img src={assets.boneIcon} alt="Bone Icon" className="text-blue-700 w-5 h-5 "/>   
                    Get started
                </button>
            </div>
        </div>

        <img class="max-w-[500px] " src={assets.logoIcon} alt="logo"/>
    </div>
    

    );
};
export default Home;