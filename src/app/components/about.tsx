import React from 'react'
import Image from "next/image"
function About() {
  return (
    <div id='About'>
        <section className=" body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col  items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
    <h1 className="title-font sm:text-4xl text-4xl mb-7 font-bold text-green-600 hover:text-black flex justify-center mt-20"> About Us
    </h1>
      <h2 className="title-font sm:text-2xl text-2xl mb-4 font-bold text-green-600 hover:text-black " data-aos="zoom-in-up">
       Fresh,Organic,Sustainable
      </h2>
      <p className="mb-8 leading-relaxed text-black font-medium text-lg hover:scale-105"data-aos="zoom-in-up">
       We are passoniate about delievering the freshest organic fruits and vegetables since 2010 grown sustainably and free from harmful chemicals . Our mission is to promote healthy living while protecting the environment 
       offering your nutritious farm-fresh produce that is good for you and the planet. Now after the sucess of your Product introducing a organic seeds for sale for the betterment of our earth eco-friendly and healthy.
      </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image  src="/image1.jpg"
        className="object-cover object-center rounded-lg border-4 border-green-700 hover:scale-105"data-aos="zoom-in-up"
        alt="hero"
        width={350}
        height={100}
      />
    </div>
  </div>

{/* --------------------------------------Image2--------------------------------- */}
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center -mt-[120px]">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-2xl text-xl mb-4 font-bold text-green-600 hover:text-black hover:scale-105"data-aos="zoom-in-up">
       Pure Water free-Pesticides
      </h1>
      <p className="mb-8 leading-relaxed text-black font-medium text-lg hover:scale-105"data-aos="zoom-in-up">
      We prioritize using clean high-quality water to nourish our crops ensuring they grow naturally and free from harmful pesticides.By embracing organic farming methods we protect both the environment and your health delivering produce that is as pure as nature intended.
      </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-[40px]">
      <Image  src="/water.jpg"
        className="object-cover object-center rounded-lg border-4 border-green-700 hover:scale-105"data-aos="zoom-in-up"
        alt="hero"
        width={350}
        height={100}
      />
    </div>
  </div>

{/* ------------------------------Image3------------------------------------------- */}
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center -mt-[120px]">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-2xl text-2xl mb-4 font-bold text-green-600 hover:text-black hover:scale-105"data-aos="zoom-in-up">
       Benefits of Organic Farmings
      </h1>
      <p className="mb-8 leading-relaxed text-black font-medium text-lg hover:scale-105"data-aos="zoom-in-up">
      Organic farming provides chemical-free nutrient-rich produce that tastes better and is healthier for you. It protects the environment by reducing pollution and promoting biodiversity while sustainable practices preserve soil health for the future. Supporting organic farming also means backing local farmers and contributing to a healthier planet.
      </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-[40px]">
      <Image  src="/farm.jpg"
        className="object-cover object-center rounded-lg border-4 border-green-700 hover:scale-105"data-aos="zoom-in-up"
        alt="hero"
        width={350}
        height={100}
      />
    </div>
  </div>

{/* -------------------Image4------------------------------------ */}
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center -mt-[120px]">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-2xl text-2xl mb-4 font-bold text-green-600 hover:text-black hover:scale-105"data-aos="zoom-in-up">
       Temperature Control
      </h1>
      <p className="mb-8 leading-relaxed text-black font-medium text-lg hover:scale-105"data-aos="zoom-in-up">
      Effective heat control in organic greenhouses ensures optimal growing conditions for plants.Techniques like natural ventilation shade cloths and thermal mass materials help regulate temperatures promoting healthy growth.These methods reduce the need for chemical interventions fostering a sustainable and eco-friendly farming environment.
      </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2  w-5/6 -mt-[40px]">
      <Image  src="/temp.jpg"
        className="object-cover object-center rounded-lg border-4 border-green-700 hover:scale-105"data-aos="zoom-in-up"
        alt="hero"
        width={350}
        height={100}
      />
    </div>
  </div>

{/* -----------------------------Image5-------------------------------------- */}
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center -mt-[120px]">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-2xl text-2xl hover:scale-105 mb-4 font-bold text-green-600 hover:text-black"data-aos="zoom-in-up">
       New Oragnic Seeds
      </h1>
      <p className="mb-8 leading-relaxed text-black font-medium text-lg hover:scale-105"data-aos="zoom-in-up">
      We are excited to offer a diverse selection of high-quality organic seeds for your garden.Our seeds are carefully sourced to ensure they are free from synthetic pesticides and genetically modified organisms GMOs promoting healthy growth and vibrant produce.Whether you are a seasoned gardener or just starting organic cultivate eco-friendly garden.
      </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-[40px]">
      <Image  src="/seeds.jpg"
        className="object-cover object-center rounded-lg border-4 border-green-700 hover:scale-105"data-aos="zoom-in-up"
        alt="hero"
        width={350}
        height={100}
      />
    </div>
  </div>


  
  

  

  










</section>

    </div>
  )
}

export default About;