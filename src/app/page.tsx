"use client";
import React , { useEffect } from 'react'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Product from './components/product';
import AOS from "aos"
import "aos/dist/aos.css";

function Page() {
  useEffect(()=>{
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh()
  },[])
  return (
    <div>
      <Home/>
      <Product/>
      <About/>
      <Contact/>
      
    </div>
  )
}

export default Page;