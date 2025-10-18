import React from "react";
import DressBanner from "../../components/home/DressBanner.jsx";
import Dresses from "../../components/home/Dresses.jsx";
import PhotoGallery from "../../components/home/PhotoGallery.jsx";

function Home() {
  return (
    <>
      <DressBanner />
      <Dresses />
      <PhotoGallery />
    </>
  );
}

export default Home;
