import React from 'react'
import Image from "next/image"
function Product() {
  return (
    <div id='Product'>
      {/* ------------------------Section1------------------------------------------- */}
      {/* ---------------------------------------Images 1-------------------------- */}
      <div>
            <h1 className='flex justify-center  font-bold font-serif text-green-600  hover:text-black text-3xl mb-8'>Our Products are</h1>
            <div className='flex  justify-center  mr-7 ml-6 gap-7 '>
              <div className="lg:max-w-lg lg:w-full  md:w-1/2 w-5/6 ">
                <Image src={'/spinach.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105 "
                  alt="hero"
                  width={300}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center">
                  Organic Veggies
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Spinach
                </p>
              </div>
              {/* -------------------------------Image2 ------------------------------------*/}
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image src={'/garlic.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105 "
                  alt="hero"
                  width={300}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center ">
                  Organic Veggies
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Garlic
                </p>
              </div>
              {/* ------------------------------Image3----------------------------------------- */}
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/lemon.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105 "
                  alt="hero"
                  width={300}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center">
                  Organic Veggies
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Lemon
                </p>
              </div>
              {/* ----------------------------Image4---------------------------------- */}
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/caroot.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105"
                  alt="hero"
                  width={320}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center">
                  Organic Veggies
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Carrot
                </p>
              </div>
            </div>

            {/* ----------------------------Section2------------------------------------------------ */}

            {/* -------------------------------Image5----------------------------- */}
            <div className='flex  justify-center gap-3 mr-5 ml-5 mt-6 '>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/mirch.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105 "
                  alt="hero"
                  width={300}
                  height={10}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Veggies
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center ">
                  Capsicum
                </p>
              </div>

              {/* -------------------------------Image6----------------------------- */}
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/car.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105"
                  alt="hero"
                  width={300}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Veggies
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Cabbage
                </p>
              </div>


              {/* -------------------------------Image7----------------------------- */}

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/loki.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105"
                  alt="hero"
                  width={300}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Veggies
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Cucumber
                </p>
              </div>

              {/* -------------------------------Image8----------------------------- */}

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/bangan.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105"
                  alt="hero"
                  width={300}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Veggies
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Eggplant
                </p>
              </div>
            </div>

            {/* ----------------------------Section3------------------------------------------------ */}

            {/* -------------------------------Image9----------------------------- */}

            <div className='flex  justify-center gap-3 mr-5 ml-5 mt-6 '>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/mango.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105"
                  alt="hero"
                  width={320}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Fruits
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Mango
                </p>
              </div>

              {/* -------------------------------Image10----------------------------- */}

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/melon.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105 "
                  alt="hero"
                  width={500}
                  height={200}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Fruits
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Watermelon
                </p>
              </div>

              {/* -------------------------------Image11----------------------------- */}

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/pomegrante.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105 "
                  alt="hero"
                  width={300}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Fruits
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Pomegranate
                </p>
              </div>

              {/* -------------------------------Image12----------------------------- */}

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/orange.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105 "
                  alt="hero"
                  width={300}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Fruits
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Orange
                </p>
              </div>
            </div>


            {/* ----------------------------Section4------------------------------------------------ */}
            {/* -------------------------------Image13----------------------------- */}

            <div className='flex  justify-center gap-3 mr-5 ml-5 mt-6 '>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/banana.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105 "
                  alt="hero"
                  width={320}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Fruits
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Banana
                </p>
              </div>

              {/* -------------------------------Image14----------------------------- */}

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/hum.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105"
                  alt="hero"
                  width={500}
                  height={200}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Fruits
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Japanese Fruit
                </p>
              </div>

              {/* -------------------------------Image15----------------------------- */}

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/kharboza.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105"
                  alt="hero"
                  width={300}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Fruits
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Kharboza
                </p>
              </div>

              {/* -------------------------------Image16----------------------------- */}

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <Image src={'/strawberry.jpg'}
                  className="object-cover object-center rounded-lg border-4 border-red-800  hover:scale-105"
                  alt="hero"
                  width={300}
                  height={100}
                />
                <p className=" text:lg leading-relaxed text-green-600 font-bold flex justify-center mt-3">
                  Organic Fruits
                </p>
                <p className="text:lg  text-red-600 font-semibold flex justify-center">
                  Strawberry
                </p>
              </div>
            </div> 
          </div>
        </div>
        )
}

        export default Product