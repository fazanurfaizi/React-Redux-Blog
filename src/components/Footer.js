import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <h1>Blog Faza</h1>
                <p className="copyright-line">© Copyright {(new Date().getFullYear())} - All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;