import React from 'react';
import {Link } from 'react-router-dom';
const Navbar =(props)=>{
    return(
        <div className="container">
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="navbar-brand"><Link to="Home">Home</Link></div>
                    <div className="navbar-brand"><Link to="About">About</Link></div>
                </div>


                <div className="collapse navbar-collapse js-navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="dropdown mega-dropdown">
                            <a href="" className="dropdown-toggle" data-toggle="dropdown">Collection
              <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                            </a>

                            <ul className="dropdown-menu mega-dropdown-menu row">
                                <li className="col-sm-3">
                                    <ul>
                                        <li className="dropdown-header">New in Stores</li>
                                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="item active">
                                                    <a href="">
                                                        <img src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" className="img-responsive"
                                                            alt="product 1"/>
                        </a>
                                                        <h4>
                                                            <small>Summer dress floral prints</small>
                                                        </h4>
                                                        <button className="btn btn-primary" type="button">49,99 €</button>
                                                        <button href="" className="btn btn-default" type="button">
                                                            <span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                      </div>
                                                    
                      <div className="item">
                                                        <a href="">
                                                            <img src="http://placehold.it/254x150/ef5e55/f5f5f5/&text=New+Collection" className="img-responsive"
                                                                alt="product 2"/>
                        </a>
                                                            <h4>
                                                                <small>Gold sandals with shiny touch</small>
                                                            </h4>
                                                            <button className="btn btn-primary" type="button">9,99 €</button>
                                                            <button href="" className="btn btn-default" type="button">
                                                                <span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                      </div>
                                                       
                      <div className="item">
                                                            <a href="">
                                                                <img src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" className="img-responsive"
                                                                    alt="product 3"/>
                        </a>
                                                                <h4>
                                                                    <small>Denin jacket stamped</small>
                                                                </h4>
                                                                <button className="btn btn-primary" type="button">49,99 €</button>
                                                                <button href="" className="btn btn-default" type="button">
                                                                    <span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                      </div>
                                                          
                    </div>
                                                        
                  </div>
                                                    
                  <li className="divider"></li>
                                                    <li>
                                                        <a href="">View all Collection
                      <span className="glyphicon glyphicon-chevron-right pull-right"></span>
                                                        </a>
                                                    </li>
                </ul>
              </li>
                                            <li className="col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Dresses</li>
                                                    <li>
                                                        <a href="">Unique Features</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Image Responsive</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Auto Carousel</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Newsletter Form</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Four columns</a>
                                                    </li>
                                                    <li className="divider"></li>
                                                    <li className="dropdown-header">Tops</li>
                                                    <li>
                                                        <a href="">Good Typography</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Jackets</li>
                                                    <li>
                                                        <a href="">Easy to customize</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Glyphicons</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Pull Right Elements</a>
                                                    </li>
                                                    <li className="divider"></li>
                                                    <li className="dropdown-header">Pants</li>
                                                    <li>
                                                        <a href="">Coloured Headers</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Primary Buttons & Default</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Calls to action</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Accessories</li>
                                                    <li>
                                                        <a href="">Default Navbar</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Lovely Fonts</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Responsive Dropdown </a>
                                                    </li>
                                                    <li className="divider"></li>
                                                    <li className="dropdown-header">Newsletter</li>
                                                    <form className="form" role="form">
                                                        <div className="form-group">
                                                            <label className="sr-only" >Email address</label>
                                                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email"
                                                    onChange={props.handleEmailInput}/>
                    </div>
                                                            <button type="submit" className="btn btn-primary btn-block"
                                                onClick={props.handleFormSubmit}
                                                            
                                                            >Sign in</button>
                  </form>
                </ul>
              </li>
            </ul>

          </li>
                                    </ul>

      </div>
                              
    </nav>

        </div>
    )

}
export default Navbar;