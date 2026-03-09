import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 md:p-9 p-3 flex items-center">
            <img src="/images/nav-logo.svg" alt="nav-logo" className="md:w-24 w-20" />
            <ul className="ml-8 flex space-x-6 text-white">
                <li><a href="#hero" className="hover:underline">Home</a></li>
                <li><a href="#flavors" className="hover:underline">Flavors</a></li>
                <li><a href="#nutrition" className="hover:underline">Nutrition</a></li>
                <li><a href="#benefits" className="hover:underline">Benefits</a></li>
            </ul>
        </nav>)
}

export default Navbar