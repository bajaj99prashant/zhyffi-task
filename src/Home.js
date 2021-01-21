import React, { useEffect } from "react";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { dummyCarouselData } from "./dummyData";
import { useStateValue } from "./DataLayer";
import { navigate } from "@reach/router";

function Home() {
  const [state] = useStateValue();
  useEffect(() => {
    if (
      state.logged !== true ||
      state.email === null ||
      state.name === null ||
      state.img === null
    ) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar name={state.name} />
      <Hero />
      {dummyCarouselData.map((data, i) => (
        <Carousel data={data} key={i} />
      ))}
    </div>
  );
}

export default Home;
