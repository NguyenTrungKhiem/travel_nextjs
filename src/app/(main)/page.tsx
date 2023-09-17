import React from 'react';
import { NextPage } from 'next';
import Slides from './home/slides/Slides';
import Destinations from './home/destinations/Destinations';
import SpecialOffer from './home/specialOffer/SpecialOffer';
import OurBlog from './home/ourBlog/OurBlog';
import TripPlanner from './home/tripPlanners/TripPlanner';
const Home: NextPage = () => {
  return (
    <main className="w-full">
      <Slides />
      <Destinations />
      <SpecialOffer/>
      <OurBlog/>
      <TripPlanner/>
    </main>
  );
};
export default Home;
