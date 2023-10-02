import React from 'react';
import { NextPage } from 'next';
import Slides from './home/slides/Slides';
import Destinations from './home/destinations/Destinations';
import SpecialOffer from './home/specialOffer/SpecialOffer';
import OurBlog from './home/ourBlog/OurBlog';
import TripPlanner from './home/tripPlanners/TripPlanner';
import Gallery from './home/gallery/Gallery';
import Experiences from './home/experiences/Experiences';
const Home: NextPage = () => {
  return (
    <main className="w-full">
      <Slides />
      <Destinations />
      <SpecialOffer/>
      <OurBlog/>
      <TripPlanner/>
      <Gallery/>
      <Experiences/>
    </main>
  );
};
export default Home;
