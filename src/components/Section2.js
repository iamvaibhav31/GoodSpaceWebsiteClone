import Image from 'next/image'

const Section2 = () => {
          return (
                    <section >

                              <div className=" flex flex-col md:flex-row  items-center mb-5">
                                        <div className=' md:w-1/2 flex flex-col justify-center  items-center md:items-start  p-5'>
                                                  <div className='flex flex-row mb-2'>
                                                            <div className=' border border-blue-600 bg-blue-300 rounded-lg p-1 mr-2' />
                                                            <h1 className='text-xl font-bold text-blue-700'>Looking for Work</h1>

                                                  </div>
                                                  <p className=' text-lg text-center md:text-left'>Find Jobs, Freelance, Consulting & Entrepreneurship opportunities.
                                                            Work from Home, Onsite – Work from Office & Hybrid work.
                                                            Openings in India, Europe, the Middle East, America & Australia</p>
                                        </div>
                                        <Image
                                                  src='/section2.png'
                                                  width={600}
                                                  height={200}
                                                  className=' w-full md:w-1/2 flex flex-row justify-end items-center p-2 sm:p-16 md:p-14'
                                                  alt='section2'
                                        />
                              </div>

                              <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 p-5'>

                                        <div className='p-5 border border-gray-400 rounded-2xl m-2'>
                                                  <h1 className='border border-blue-600 bg-blue-300 inline-block rounded-full p-2 px-3 mb-2'>01.</h1>
                                                  <h2 className='mb-2 text-lg font-bold'>Find Work that suits you best</h2>
                                                  <p>Choose from many work formats, locations, industries & job roles to discover the work that suits you best.</p>
                                        </div>

                                        <div className='p-5 border border-gray-400 rounded-2xl m-2'>
                                                  <h1 className='border border-blue-600 bg-blue-300 inline-block rounded-full p-2 px-3 mb-2'>02.</h1>
                                                  <h2 className='mb-2 text-lg font-bold'>Get Global Exposure</h2>
                                                  <p>Choose from many work formats, locations, industries & job roles to discover the work that suits you best.</p>
                                        </div>
                                        <div className='p-5 border border-gray-400 rounded-2xl m-2'>
                                                  <h1 className='border border-blue-600 bg-blue-300 inline-block rounded-full p-2 px-3 mb-2'>03.</h1>
                                                  <h2 className='mb-2 text-lg font-bold'>Pitch your Work</h2>
                                                  <p>Choose from many work formats, locations, industries & job roles to discover the work that suits you best.</p>
                                        </div>

                                        <div className='p-5 border border-gray-400 rounded-2xl m-2'>
                                                  <h1 className='border border-blue-600 bg-blue-300 inline-block rounded-full p-2 px-3 mb-2'>04.</h1>
                                                  <h2 className='mb-2 text-lg font-bold'>Your Goodness Score</h2>
                                                  <p>Choose from many work formats, locations, industries & job roles to discover the work that suits you best.</p>
                                        </div>
                              </div>


                    </section>
          );
};

export default Section2;
