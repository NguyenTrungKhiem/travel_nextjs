import React from 'react';
import { NextPage } from 'next';
import Slides from './home/slides/Slides';
const Home: NextPage = () => {
  return (
    <main className="w-full">
      <Slides />
    </main>
  );
};
export default Home;
