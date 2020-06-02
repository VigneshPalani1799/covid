import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){

    return(
            <div className="container-fluid footer">
                <div className="row">             
                    <div className="col-4 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/tracker'>Tracker</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                        P.E.S College of Engineering<br />
                        P.E.S College of Engineering Road,<br />
                        Mandya <br />-Karnataka-571 401<br />
                        <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope-open"></i>: <a href="mailto:vigneshpalani003@gmail.com">
                            www.covidinfo.org</a>
                        </address>
                    </div>
                    <div className="row">
                    <div className="col-12 col-sm-5 align-self-center">
                        <div className="text-center">
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center">             
                    <div className="col-auto">
                        <p>© Copyright 2020 CovidInfo Organisation</p>
                    </div>
                </div>
            </div>
    );
}

export default Footer;