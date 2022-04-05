import React from 'react';
import './Home.css'
import homeImage from '../../Images/home-image.jpg'
import useReviews from '../../Hook/useReviews';
import Card from '../Card/Card';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const [reviews, setReviews] = useReviews()
    let navigate = useNavigate();

    return (

        <div className='bg-slate-200 '>

            {/* image and text div */}

            <div className="sm:mx-auto flex px-20 py-14  flex-col justify-evenly   sm:flex-row items-center ">

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


                <div className="lg:max-w-lg lg:w-4/12 md:w-1/2 w-5/6">
                    <img src={homeImage} className='rounded-lg drop-shadow-2xl' alt="" />
                </div>

            </div>

            {/* 3 review card div */}

            <div className='text-center '>
                <h1 className=" text-2xl lg:text-4xl font-medium text-red-500">
                    REVIEWS

                </h1>
                <span className="inline-block h-1 w-64 rounded bg-red-500 mt-6 mb-4"></span>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8 p-14 bg-gray-200 '>
                {
                    reviews.slice(0, 3).map(review => <Card
                        key={review.id}
                        review={review}
                    ></Card>)
                }
            </div>

            <div className="flex justify-center pb-14">


                <button
                    onClick={() => navigate('/review')}
                    className="inline-flex text-white bg-neutral-900 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">See More Review</button>
            </div>

        </div>



    );
};

export default Home;