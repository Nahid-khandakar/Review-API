import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <header className="text-gray-600 ">


            <nav className="md:ml-auto  md:mr-auto flex flex-wrap items-center justify-center text-2xl mt-6">

                <a className="mr-5  ">First Link</a>
                <a className="mr-5 ">Second Link</a>
                <a className="mr-5 ">Third Link</a>
                <a className="mr-5 ">Fourth Link</a>

            </nav>


        </header>
    );
};

export default Navbar;