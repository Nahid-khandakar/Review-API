import React from 'react';
import './Notfound.css'
import error from '../../Images/error.png'
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className=''>

            <div className='mt-16 mb-8  ml-auto mr-auto w-5/12'>
                <img src={error} alt="" />
            </div>


            <div className='text-center'>


                <Link to='/home'>
                    <button className=" text-white bg-neutral-900 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">Home Page</button>
                </Link>

            </div>

        </div>
    );
};

export default Notfound;