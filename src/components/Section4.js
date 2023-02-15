import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Section4 = () => {
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
                    <section>
                              <div className='my-10 mx-5'>
                                        <div className='text-4xl text-center my-10'>
                                                  <h1 className=' inline-block text-blue-600  border border-blue-400 bg-blue-200 rounded-lg p-3 px-4 my-2'>AS SEEN ON</h1>

                                        </div>

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
                                                            className=' m-4  flex justify-center items-center'
                                                            alt='trustescompany'
                                                  />
                                                  <Image
                                                            src='/amazon.png'
                                                            width={200}
                                                            height={200}
                                                            className=' m-4 flex justify-center items-center'
                                                            alt='trustescompany'
                                                  />
                                                  <Image
                                                            src='/blinkit.png'
                                                            width={200}
                                                            height={200}
                                                            className=' m-4 flex justify-center items-center'
                                                            alt='trustescompany'
                                                  />
                                                  <Image
                                                            src='/dell.png'
                                                            width={200}
                                                            height={200}
                                                            className=' m-4 flex justify-center items-center'
                                                            alt='trustescompany'
                                                  />
                                                  <Image
                                                            src='/techmahindra.png'
                                                            width={200}
                                                            height={200}
                                                            className=' m-4 flex justify-center items-center'
                                                            alt='trustescompany'
                                                  />
                                                  <Image
                                                            src='/lenkart.png'
                                                            width={200}
                                                            height={200}
                                                            className=' m-4 flex justify-center items-center'
                                                            alt='trustescompany'
                                                  />
                                        </Carousel>
                              </div>

                              <div className=" flex flex-col md:flex-row mb-5">

                                        <div className=' md:w-1/2 flex flex-col justify-center  items-center md:items-start  p-5 '>

                                                  <h1 className=" text-5xl mb-4  text-center">Get the  <span className=' text-blue-600'>GoodSpace</span> App Today</h1>
                                                  <p className=' text-lg text-center mb-4'>Download the GoodSpace App to stay connected with opportunities on the move.</p>

                                                  <div className=' flex flex-row '>
                                                            <a href="" className=' flex justify-center items-center'>
                                                                      <Image
                                                                                src='/googleplaystore.png'
                                                                                width={150}
                                                                                height={150}
                                                                                className=' m-2 '
                                                                                alt='downlode'
                                                                      />
                                                            </a>
                                                            <a href="" className=' flex justify-center items-center'>
                                                                      <Image
                                                                                src='/appstore.png'
                                                                                width={150}
                                                                                height={150}
                                                                                className=' m-2 '
                                                                                alt='downlode'
                                                                      />
                                                            </a>


                                                  </div>
                                        </div>

                                        <Image
                                                  src='/section4.png'
                                                  width={600}
                                                  height={200}
                                                  className=' w-full md:w-1/2 flex flex-row justify-end items-center p-2 sm:p-16 md:p-14'
                                                  alt='section4'
                                        />
                              </div>
                    </section>
          );
};

export default Section4;
