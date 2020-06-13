import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (        
        <header className="clearfix header-style5">
            <div className="logo-place">
                <div className="container">
                    <div className="inner-logo-place">
                        <a className="navbar-brand" href="#">
                            <img src="images/logo.png" alt="Blog-Faza"/>
                        </a>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="search-button" href="#">
                            <i className="fa fa-search"></i>
                        </a>
                        <form className="form-search">
                            <input type="search" placeholder="Search:"/>
                        </form>
                        <ul className="navbar-nav m-auto">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/allPosts">ALl Posts</Link>
                            </li>
                            <li className="drop-link">
								<a style={{ 'cursor': 'pointer' }}>
                                    Categories 
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                </a>
								<ul className="dropdown">
									<li>
                                        <a style={{ 'cursor': 'pointer' }}>
                                            Category 1
                                            <i className="fa fa-angle-right"></i>
                                        </a>
										<ul className="dropdown level2">
											<li><Link to="category-list.html">List style</Link></li>
											<li><Link to="category-mix.html">Mix style</Link></li>
											<li><Link to="category-grid.html">Grid style</Link></li>
										</ul>
									</li>
									<li>
                                        <a style={{ 'cursor': 'pointer' }}>
                                            Category 2
                                            <i className="fa fa-angle-right"></i>
                                        </a>
										<ul className="dropdown level2">
											<li><Link to="single-post.html">classic sidebar</Link></li>
											<li><Link to="single-post2.html">fullwidth sidebar</Link></li>
											<li><Link to="single-post3.html">alt no sidebar</Link></li>
										</ul>
									</li>
									<li>
                                        <a style={{ 'cursor': 'pointer' }}>
                                            Category 3
                                            <i className="fa fa-angle-right"></i>
                                        </a>
										<ul className="dropdown level2">
											<li><Link to="about.html">about us</Link></li>
											<li><Link to="archives.html">Archive</Link></li>
											<li><Link to="error-404.html">error 404</Link></li>
										</ul>
									</li>
								</ul>
							</li>                                                           
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto social-list">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;