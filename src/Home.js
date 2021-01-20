import React from "react";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { dummyCarouselData } from "./dummyData";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {dummyCarouselData.map((data, i) => (
        <Carousel data={data} key={i} />
      ))}
    </div>
  );
}

export default Home;
