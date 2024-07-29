import React from 'react';
import banner2 from "../../../assets/home/banner-2.jpg"
const Hero2 = () => {
    return (
        <div className='min-h-screen  bg-cover' style={{ backgroundImage:  `url(${banner2})` }}>
            <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60">
                <div className="">
                    <div className="space-y-4">
                        <h3 className='md:text-4xl text-2xl'>Find Your Inner Balance</h3>
                        <h1 className='md:text-7xl text-4xl font-bold '>Welcome to Yoga Studio</h1>
                        <div className="md:w-1/2">
                            <p className=''></p>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;