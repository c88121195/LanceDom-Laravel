import React from 'react'
import LOGO from '../img/Icon/LOGO.png'

function Header() {
    return (
        <div className="nav">
            {/* <!-- LOGO --> */}
            <div className="logo">
                <a href="">
                    <img className="LanceDom" src={LOGO} alt="logo" /></a>
                <a href="">LanceDom</a>
            </div>

            {/* <!-- navbar --> */}
            <div className="navbar">
                <a href="">Home</a>
                <a href="">Service</a>
                <a href="">Feature</a>
                <a href="">Product</a>
                <a href="">Testimonail </a>
                <a href="">FAQ </a>
            </div>
            {/* <!-- member --> */}
            <div className="member">
                <a href="">Login</a>
                <a className="sign" href="">Sign up</a>
            </div>
        </div>
    )
}

export default Header;