import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {

    return (
        <div>
            {/* <!--Navbar--> */}
            <nav className='navbar navbar-light light-blue lighten-4'>

            {/* <!-- Navbar brand --> */}
            <Link className='navbar-brand' to='#'>Skye's The Limit Studio</Link>

            {/* <!-- Collapse button --> */}
            <button className='navbar-toggler toggler-example' type='button' data-toggle='collapse' data-target='#navbarSupportedContent1'
                aria-controls='navbarSupportedContent1' aria-expanded='false' aria-label='Toggle navigation'><span className='dark-blue-text'><i
                    className='fas fa-bars'></i></span></button>

            {/* <!-- Collapsible content --> */}
            <div className='collapse navbar-collapse' id='navbarSupportedContent1'>
                {/* <!-- Links --> */}
                
                {(window.location.href === 'http://localhost:3000/ticketing') ? 
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active' data-toggle="collapse" data-target=".navbar-collapse">
                        <Link className='nav-link' to='/#Header'>Home <span className='sr-only'>(current)</span></Link>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <Link className='nav-link' to='/#mainShow'>Current Show</Link>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <Link className='nav-link' to='/#Survivor'>Survivor</Link>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <Link className='nav-link' to='/#Lessons'>Private Lessons</Link>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <Link className='nav-link' to='/#Map'>Directions</Link>
                    </li> 
                </ul>:
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active' data-toggle="collapse" data-target=".navbar-collapse">
                    <a className='nav-link' href='#Header' >Home <span className='sr-only'>(current)</span></a>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <a className='nav-link' href='#mainShow' >Current Show</a>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <a className='nav-link' href='#survivor' >Survivor</a>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <a className='nav-link' href='#mainCamps' >Camps</a>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <a className='nav-link' href='#mainLessons' >Private Lessons</a>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <a className='nav-link' href='#mainMap' >Directions</a>
                    </li>
                </ul>}
                {/* <!-- Links --> */}

            </div>
            {/* <!-- Collapsible content --> */}

            </nav>
            {/* <!--/.Navbar--> */}
        </div>
    );
};

export default Header;