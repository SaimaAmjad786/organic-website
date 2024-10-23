import React from 'react'
import Link from "next/link"
function Home() {
  return (
    <div id='Home'>
      <section className=" body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-serif text-green-600 hover:text-black">
              Why Choose Organic?
            </h1>
            <p className="mb-8  text:lg leading-relaxed text-black font-bold">
              Organic fruits and vegetables are free from Harmful chemicals providing cleaners nutrient rich-food . They help boost your health while supporting eco-friendly farming practices.Choosing organic means you are nourshing your body and protecting the environment at the same time
            </p>
            <div>
              <Link href={"#Contact"} >
              <button className="ml-4 inline-flex text-white bg-green-600 border-0 font-bold py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg ">
                Contact
              </button>
              </Link>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-[20px]">
            <img src="./fruit.jpg"
              className="object-cover object-center rounded-lg  border-4 border-green-500 hover:scale-105 "
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

export default Home