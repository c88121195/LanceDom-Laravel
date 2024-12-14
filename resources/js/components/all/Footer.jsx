import React from 'react'
import LOGO from '../img/Icon/LOGO.png'
import LINE from '../img/Icon/LINE-2.png'
import Facebook from '../img/Icon/Facebook-2.png'
import Instagram from '../img/Icon/Instagram-2.png'
// import LOGO from ''

function Footer() {
    return (
        <div className="footer">
            {/* LOGO&icons */}
            <div className="icons">
                <div className="logo">
                    <a href="">
                        <img className="LanceDom" src={LOGO} alt="logo" /></a>
                    <a href="">LanceDom</a>
                </div>
                <a href="">
                    <img src={LINE} alt="LINE" />
                </a>
                <a href=""><img src={Facebook} alt="Facebook" /></a>
                <a href=""><img src={Instagram} alt="Instagram" /></a>
            </div>
            <div style={{ flex: "4" }}></div>
            {/* copyright */}
            <div className="copyright">
                <div>
                    <a href="">網站公告</a>
                    <a href="">關於我們</a>
                    <a href="">會員條款</a>
                </div>
                <div>Copyright © 2024 LanceDom All rights reserved.</div>
            </div>
        </div >
    )
}

export default Footer;