"use client"
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Editors from "./components/Editors";
import Best from "./components/Best";
import Vita from "./components/Vita";
import Universe from "./components/Universe";
import Featured from "./components/Featured";
import Footer from "./components/Footer";




const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Editors/>
      <Best/>
      <Vita/>
      <Universe/>
      <Featured/>
      <Footer/>
   
    
    </div>
  );
};

export default page;
