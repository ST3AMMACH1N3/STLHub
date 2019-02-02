import React from 'react';
import './style.css';

function Header() {
    return (
        <div>
            {/* <!--Navbar--> */}
            <nav className='navbar navbar-light light-blue lighten-4'>

            {/* <!-- Navbar brand --> */}
            <a className='navbar-brand' href='#'>Skye's The Limit Studio</a>

            {/* <!-- Collapse button --> */}
            <button className='navbar-toggler toggler-example' type='button' data-toggle='collapse' data-target='#navbarSupportedContent1'
                aria-controls='navbarSupportedContent1' aria-expanded='false' aria-label='Toggle navigation'><span className='dark-blue-text'><i
                    className='fas fa-bars'></i></span></button>

            {/* <!-- Collapsible content --> */}
            <div className='collapse navbar-collapse' id='navbarSupportedContent1'>

                {/* <!-- Links --> */}
                <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                    <a className='nav-link' href='#Header'>Home <span className='sr-only'>(current)</span></a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#MainShows'>Current Show</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#survivor'>Survivor</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#Lessons'>Private Lessons</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#map'>Directions</a>
                </li>
                </ul>
                {/* <!-- Links --> */}

            </div>
            {/* <!-- Collapsible content --> */}

            </nav>
            {/* <!--/.Navbar--> */}
        </div>
    );
};

export default Header;