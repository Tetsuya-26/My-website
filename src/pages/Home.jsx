import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import { Outlet } from 'react-router-dom';
import FeaturedCategory from '../components/FeaturedCategory';



const Home = () => {
    return (
   <div>
      <HomeLayout />
      <Outlet />
      <FeaturedCategory />  
   </div>
    

    );
};
export default Home;