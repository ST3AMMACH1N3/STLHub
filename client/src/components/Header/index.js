import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    jumpTo = event => {
        let href = event.target.href;
        let target = document.getElementById(href.split('#')[1]);
        if (!target) {
            return;
        }
        event.preventDefault();
        let top = target.offsetTop;
        let elemHeight = target.offsetHeight;
        let winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        window.scrollTo(0, top - winHeight + elemHeight * 3 / 4);
    }

    render() {
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
                            <Link className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></Link>
                        </li>
                        <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                            {this.props.credentials ? <a className='nav-link' href='/#header' onClick={this.props.handleLogout}>Log Out</a> : <Link className='nav-link' to='/login'>Log In</Link> }
                        </li>
                        {(this.props.credentials && this.props.credentials.admin) ?
                        <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                            <Link className='nav-link' to='/admin'>Admin</Link>
                        </li> : ''}
                        <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                            <Link className='nav-link' to='/about'>About</Link>
                        </li>
                        <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                            <a className='nav-link' href='/#mainShow' onClick={this.jumpTo}>Current Show</a>
                        </li>
                        <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                            <a className='nav-link' href='/#survivor' onClick={this.jumpTo}>Survivor</a>
                        </li>
                        <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                            <a className='nav-link' href='/#mainCamps' onClick={this.jumpTo}>Camps</a>
                        </li>
                        <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                            <a className='nav-link' href='/#mainLessons' onClick={this.jumpTo}>Private Lessons</a>
                        </li>
                        <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                            <a className='nav-link' href='/#mainMap' onClick={this.jumpTo}>Directions</a>
                        </li>
                    </ul>
                    {/* <!-- Links --> */}

                </div>
                {/* <!-- Collapsible content --> */}

                </nav>
                {/* <!--/.Navbar--> */}
            </div>
        );
    }
};

export default Header;

// window.location.href