import React from 'react'

function Contact() {
  return (
    <div id='Contact'>
        <form action="https://formspree.io/f/mldeeoye"
  method="POST">
        <section className=" body-font relative -mt-[50px]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-green-600 "data-aos="zoom-in-up">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold"data-aos="zoom-in-up">
       Get in touch with us to learn more about our organic products and how they fit in to a healthier lifestyle.Wheather 
       you have questions about our offerings or need personalized recommendations we are here to help you wellness journey, Fill out the form below and we will respond as soon as possible.
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-lg font-bold text-black flex justify-center"data-aos="zoom-in-up">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-yellow-200  border-2 border-black focus:border-green-500  focus:bg-white  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"data-aos="zoom-in-up"
            required/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-black font-bold flex justify-center"data-aos="zoom-in-up">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-yellow-200 border-2 border-black focus:border-green-500   focus:bg-white  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"data-aos="zoom-in-up"
            required/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black font-bold flex justify-center"data-aos="zoom-in-up"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-yellow-200 border-2 border-black focus:border-green-500   focus:bg-white  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"data-aos="zoom-in-up"
              defaultValue={""}
            required/>
          </div>
        </div>
        <div className="p-2 w-full"data-aos="zoom-in-up">
          <button className="flex mx-auto text-white bg-green-500 font-bold border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
    </div>
  )
}

export default Contact