import React from 'react';
import bucketgirl from '../../assets/images/bucketgirl.png';

const Landing = () => {
    return (
        <>
            <div className='relative'>
                <div class="hero h-screen lg:h-[60vh] bg-accent ">
                    <div class="hero-content flex-col lg:flex-row">
                        <div>
                            <p
                                data-aos='fade-right'
                                data-aos-duration='1000'
                                data-aos-delay='200'
                                className='text-xl'
                            >
                                Best Quality
                            </p>
                            <h1
                                data-aos='fade-right'
                                data-aos-delay='400'
                                data-aos-duration='900'
                                class='text-5xl font-bold'
                            >
                                Professional Cleaning Service
                            </h1>
                            <p
                                data-aos='fade-right'
                                data-aos-delay='600'
                                data-aos-duration='800'
                                class='py-6 max-w-xl'
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has
                            </p>
                            <button
                                data-aos='zoom-in'
                                data-aos-delay='1300'
                                class='btn btn-primary mb-5'
                            >
                                Get Started
                            </button>
                        </div>
                        <div className='h-[57vh] shrink-0'>
                            <img className='h-full' src={bucketgirl} alt='' />
                        </div>
                    </div>
                </div>
                <div className=' rounded-lg mx-auto mt-[-50px] relative z-20 w-5/6 bg-base-200 p-10 shadow-lg'>
                    <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                        <input type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full" 
                            />
                        <input type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full" 
                            />
                        <input type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full" 
                            />
                        <input type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full" 
                            />
                        <input type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full" 
                            />
                        <input type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full" 
                            />
                        <input type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full" 
                            />
                        <input type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full" 
                            />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;