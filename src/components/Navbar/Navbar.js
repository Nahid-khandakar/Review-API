import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <header className="text-gray-600 ">


            <nav className="md:ml-auto  md:mr-auto flex flex-wrap items-center justify-center text-xl mt-10 mb-10">

                <Link to='home' className='ml-4 mr-9' >HOME</Link>
                <Link to='review' className='mr-9'> REVIEWS</Link>
                <Link to='dashboard' className='mr-9' > DASHBOARD</Link>
                <Link to='blogs' className='mr-9' >BLOGS</Link>
                <Link to='about' className='mr-9'>ABOUT</Link>

            </nav>


        </header>
    );
};

export default Navbar;