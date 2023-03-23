// import React from "react";
import {Link} from "react-router-dom";

import React, {useEffect, useState} from "react";
import { useOutletContext } from "react-router-dom";
// import axios from "axios";

// import {AO} from '../AO';

import location from './location pic.jpg';
import insta from './insta pic.jpg';

export default function Footer(){

    // const [loggedInUser, setLoggedinUser] = useState("");
    return (
    //     <header className="App-header">
    //         {/* refreshAO() */}
    //         {/* <span className="title"><h1>EnergyAware</h1></span>
    //         <span><div className="AccountOptions">
    //             {/* <nav className="AO-nav">
    //                 <Link className="AO-link" to={'/register'}>Sign Up</Link>
    //                 <p className="AO-or">or</p>
    //                 <Link className="AO-link" to={'/login'}>Login</Link>
    //             </nav> */}
    //         </div></span> */}
    //     </header>

        <footer className="App-footer">
            <div className="footerBox">
                <div>
                    <strong>Address</strong>
                    <div className="address">
                        <img src={location} alt="location icon" id="location"></img>
                        <span className="addressText">
                            <p>23 Leila Junction</p>
                            <p>Uxbridge</p>
                            <p>UB46 7BY</p>
                        </span>
                    </div>
                </div>
                <div>
                    <strong>Contact Details</strong>
                    <div className="cD">
                        <div className="contactDetails">
                            <p>Email:</p>
                            <p>Telephone:</p>
                        </div>
                        <div className="cDetails">
                            <p>energyaware.moreinfo@gmail.com</p>
                            <p>+44 2235678195</p>
                        </div>
                    </div>
                </div>
                <div className="socialMedia">
                    <strong>Social Media</strong>
                    {/* <p>Instagram <img src={insta} alt="instagram icon" id="insta"></img></p> */}
                    <p>Facebook</p>
                </div>
            </div>
        </footer>
    )
}