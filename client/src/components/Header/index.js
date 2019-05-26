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
                <nav className='navbar'>

                {/* <!-- Navbar brand --> */}
                <Link className='navbar-brand' to='/'>
                    <svg version="1.1" viewBox="0 0 11.648 17.639">
                    {/* <svg width="44.024" height="66.668" version="1.1" viewBox="0 0 11.648 17.639"></svg> */}
                        <g transform="translate(-23.895 -63.845)">
                        <g transform="matrix(.24893 0 0 .24931 9.0166 40.631)" style={{strokeWidth: 4.0141}}>
                        <path d="m90.329 130.82c1.3227 0.91668-2.3701 7.6728-2.249 12.303 0.05678 2.1708-2.1958 4.1143-2.6194 6.2442-0.33553 1.6873 0.49214 3.4771 0.13229 5.1594-0.42806 2.0012-2.1344 5.1687-2.3812 6.4823-0.27508 1.4641 1.487 5.3407 4.2333 0 1.5099-2.9363 2.4446-6.0645 3.5719-9.1281 0.55347-1.5042 2.9374-1.6546 3.4396-5.5562 0.249-1.9346 0.91445-3.8061 1.8521-5.6885 1.9968-4.0089 3.3329-9.6462 1.6404-12.806-2.3348-4.3588 0.63681-11.083 1.7992-13.652 0.63142-1.3957 0.49374-7.8941 6.6146-17.33 0.45884-1.0189-1.5929-3.0494-3.175-3.5719-0.79226-0.26161 0.18045 1.6083 0 2.3812-0.90566 3.8794-3.0205 7.994-5.2917 10.716-0.74214 0.88932-1.2068 1.8183-1.4552 2.7781-1.6812 6.4958-4.7496 8.5885-7.3254 4.9144-0.58822-0.83904-1.4853-0.94583-2.5171-0.86628-2.8026 0.21609-6.0869-3.2471-8.4651-1.8635-1.6659 0.96916-3.5094 0.3859-5.7695 0.99036-6.2699 1.6769-10.211 7.8833-5.2917 4.8948 1.8074-1.098 4.9438-2.0736 7.7523-1.2435 2.4845 0.73434 5.1567 1.0697 7.329 1.905 1.5255 0.58662 4.2903 2.4948 3.8894 7.7523-0.09476 1.2426-3.7708-1.0409-6.1383 2.831-1.612 2.6363-3.3406 3.271-5.0271 3.5719-4.4568 0.79504-6.9145 4.4121-9.6308 8.0698-0.53135 0.71549-1.1637-0.32656-2.1167 0.37042-6.5327 4.7781-1.3726 4.3733 0.10583 3.3338 11.021-7.7491 15.179-4.5653 16.272-5.1594 4.6428-2.5239 9.5361-8.7224 10.821-7.8317z" style={{strokeWidth:.26552}}/>
                        <path d="m86.704 106.47c-0.83016-3.9564 6.2967-4.2537 6.2177-1.4817-0.08981 3.1512 2.2846 4.0196 1.8521 5.2388-1.1671 3.2898-8.0198 0.89985-7.9375-0.31754 0.11037-1.6318 0.1459-2.1137-0.1323-3.4396z" style={{strokeWidth:.26552}}/>
                        </g>
                        </g>
                    </svg>
                    <span className='desktop-logo'>Skye's The Limit Studio</span><span className='mobile-logo'>STL Studio</span>
                </Link>
                {/* <!-- Collapse button --> */}
                <button className='navbar-toggler toggler-example' type='button' data-toggle='collapse' data-target='#navbarSupportedContent1'
                    aria-controls='navbarSupportedContent1' aria-expanded='false' aria-label='Toggle navigation'><span className=''><i
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
                        {(this.props.credentials) ?
                        <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse">
                            <Link className='nav-link' to='/changepassword'>Change Password</Link>
                        </li> : ''}
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