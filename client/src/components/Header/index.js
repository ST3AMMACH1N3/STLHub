import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header(props) {

    return (
        <div className='header'>
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
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active' data-toggle="collapse" data-target=".navbar-collapse">
                        <a className='nav-link' href='/#Header' >Home <span className='sr-only'>(current)</span></a>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        {props.credentials ? <a className='nav-link' href='/#header' onClick={props.handleLogout}>Log Out</a> : <Link className='nav-link' to='/login'>Log In</Link> }
                    </li>
                    {(props.credentials && props.credentials.admin) ?
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <Link className='nav-link' to='/admin'>Admin</Link>
                    </li> : ''}
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <Link className='nav-link' to='/about'>About</Link>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <a className='nav-link' href='/#mainShow' >Current Show</a>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <a className='nav-link' href='/#survivor' >Survivor</a>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <a className='nav-link' href='/#mainCamps' >Camps</a>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <a className='nav-link' href='/#mainLessons' >Private Lessons</a>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                        <a className='nav-link' href='/#mainMap' >Directions</a>
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

// window.location.href