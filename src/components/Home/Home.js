import React from 'react';
import './Home.css'


const Home = () => {
    return (

        <div className="container sm:mx-auto flex px-14 py-14  flex-col justify-evenly   sm:flex-row items-center  ">

            <div className=" md:w-1/2 lg:pr-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                <h1 className=" text-2xl lg:text-4xl mb-4 font-medium text-red-500 ">
                    LENS REVIEW
                </h1>

                <h1 className=' text-3xl lg:text-6xl mb-4 font-bold text-amber-400'>
                    Find Your Lens Review. . .
                </h1>

                <hr />
                <p className="mb-8  mt-6 leading-relaxed">
                    What Is a Camera Lens? A lens is a tool used to bring light to a fixed focal point. In a film camera, the lens sends the light to the film strip, while in a digital camera (like DSLRs or mirrorless cameras), the lens directs light to a digital sensor.
                </p>

                <div className="flex justify-center">

                    <button className="inline-flex text-white bg-neutral-900 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">Search Your lens</button>

                </div>

            </div>


            <div className="lg:max-w-lg lg:w-4/12 md:w-1/2 w-5/6  ">
                <img src='./home-image.jpg' className='rounded-lg drop-shadow-2xl' alt="" />
            </div>

        </div>

    );
};

export default Home;