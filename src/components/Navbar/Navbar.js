import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    return (

        <nav className="sm:ml-auto  sm:mr-auto flex flex-wrap items-center justify-center text-xl mt-8 mb-8">


            <NavLink to='home' className={({ isActive }) => (isActive ? "active-link ml-4 mr-10" : "link ml-4 mr-10")}>
                HOME
            </NavLink>


            <NavLink to='review' className={({ isActive }) => (isActive ? "active-link mr-10" : "link mr-10")}>
                REVIEW
            </NavLink>

            <NavLink to='dashboard' className={({ isActive }) => (isActive ? "active-link mr-10 " : "link mr-10 ")} >
                DASHBOARD
            </NavLink>

            <NavLink to='blog' className={({ isActive }) => (isActive ? "active-link mr-10" : "link mr-10")} >
                BLOG
            </NavLink>

            <NavLink to='about' className={({ isActive }) => (isActive ? "active-link mr-10" : "link mr-10")}>
                ABOUT
            </NavLink>

        </nav>

    );
};

export default Navbar;