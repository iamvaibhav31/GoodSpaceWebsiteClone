import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Section1 = () => {
          const responsive = {
                    desktop: {
                              breakpoint: { max: 3000, min: 1024 },
                              items: 3,
                              slidesToSlide: 3 // optional, default to 1.
                    },
                    tablet: {
                              breakpoint: { max: 1024, min: 464 },
                              items: 2,
                              slidesToSlide: 2 // optional, default to 1.
                    },
                    mobile: {
                              breakpoint: { max: 464, min: 0 },
                              items: 1,
                              slidesToSlide: 1 // optional, default to 1.
                    }
          };
          return (
                    <section className=" mt-44 md:mt-32 ">
                              <h1 className=" text-5xl md:text-6xl text-gray-600  text-center">The Global Talent Marketplace</h1>
                              <div className=" flex flex-col md:flex-row  sm:justify-between sm:items-center my-10 mx-5">
                                        <div className=" w-full md:w-1/4 p-4 text-center md:text-left">
                                                  <h2 className=' text-lg font-bold my-2'>Hire Talent</h2>
                                                  <p className='my-2'>Find Employees, Freelancers & Entrepreneurs <span className=' text-red-600'>Learn More </span></p>
                                                  <div className="relative my-2">
                                                            <input type="search" id="default-search" className="block w-full p-3 pl-5 md:pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-900  " placeholder="Search Candidate" required />
                                                            <button type="submit" className=" absolute right-2 bottom-1.5 bg-blue-700  focus:ring-4 focus:outline-none   rounded-lg text-sm px-2 py-2 ">
                                                                      <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                            </button>
                                                  </div>
                                                  <a href="#" className="text-blue-600 block w-full my-4 border border-blue-600  focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-lg text-center px-5 py-2.5  mr-2 mb-2">Post a Job</a>
                                        </div>

                                        <div className=" flex flex-col   w-full sm:w-2/4  items-center ">
                                                  <Image
                                                            src='/section1.png'
                                                            width={300}
                                                            height={300}
                                                            className=' m-2 mb-12'
                                                            alt='section1'
                                                  />

                                                  <div className=' mt-12'>
                                                            <h2 className=' text-lg text-center font-bold'>Free registration/sign in</h2>

                                                            <div className='flex  w-full flex-row py-4'>
                                                                      <select id="countries" class="bg-gray-50 border w-2/6 p-2 mr-1 text-sm text-gray-900  border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-900">

                                                                                <option selected>+91</option>
                                                                                <option >Canada</option>
                                                                                <option >France</option>
                                                                                <option >Germany</option>
                                                                      </select>

                                                                      <input type="text" id="default-search" className=" w-4/6 p-2 pl-5   mr-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-500 placeholder:font-bold  " placeholder="Phone Number" required />
                                                            </div>

                                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800  rounded-lg text-lg px-5 py-2.5 mr-2 my-2 block w-full dark:bg-blue-600 dark:hover:bg-blue-700 ">Continue</button>
                                                  </div>
                                        </div>

                                        <div className=" w-full md:w-1/4 p-4">
                                                  <h2 className=' text-lg font-bold my-2'>Find Work</h2>
                                                  <p className='my-2'>Find Jobs, Freelance / Consulting Opportunities <span className=' text-red-600'>Learn More </span> </p>
                                                  <div className="relative my-2">
                                                            <input type="search" id="default-search" className="block w-full p-3 pl-5 md:pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-900  " placeholder="Search Candidate" required />
                                                            <button type="submit" className=" absolute right-2 bottom-1.5 bg-blue-700  focus:ring-4 focus:outline-none   rounded-lg text-sm px-2 py-2 ">
                                                                      <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                            </button>
                                                  </div>
                                                  <a href="#" className="text-blue-600 block w-full my-4 border border-blue-600  focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-lg text-center px-5 py-2.5  mr-2 mb-2">Pitch a Work</a>
                                        </div>
                              </div>

                              <div className='my-10 mx-5'>
                                        <h1 className=' text-2xl'>Trustes By:-</h1>
                                        <Carousel

                                                  responsive={responsive}

                                                  infinite={true}
                                                  autoPlay={true}
                                                  autoPlaySpeed={2000}
                                                  customTransition="all .5"
                                                  transitionDuration={500}
                                        >
                                                  <Image
                                                            src='/swiggy.png'
                                                            width={200}
                                                            height={200}
                                                            className=' m-4'
                                                            alt='trustescompany'
                                                  />
                                                  <Image
                                                            src='/amazon.png'
                                                            width={200}
                                                            height={200}
                                                            className=' m-4'
                                                            alt='trustescompany'
                                                  />
                                                  <Image
                                                            src='/blinkit.png'
                                                            width={200}
                                                            height={200}
                                                            className=' m-4'
                                                            alt='trustescompany'
                                                  />
                                                  <Image
                                                            src='/dell.png'
                                                            width={200}
                                                            height={200}
                                                            className=' m-4'
                                                            alt='trustescompany'
                                                  />
                                                  <Image
                                                            src='/techmahindra.png'
                                                            width={200}
                                                            height={200}
                                                            className=' m-4'
                                                            alt='trustescompany'
                                                  />
                                                  <Image
                                                            src='/lenkart.png'
                                                            width={200}
                                                            height={200}
                                                            className=' m-4'
                                                            alt='trustescompany'
                                                  />
                                        </Carousel>
                              </div>
                    </section>
          );
};

export default Section1;
