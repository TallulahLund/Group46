// import React from "react";

// export default function Header(){
//     return (
//         // <header className="App-header">

//         //     <h1>Group Project</h1>

//         //     {/* <Link className="nav-link" to={'/register'}>Register</Link>
//         //     <Link className="nav-link" to={'/login'}>Login</Link> */}
//         // </header>

//         <h1 className="App-header">EnergyAware</h1>
//     )
// }








// import React from "react";
import {Link} from "react-router-dom";

import React, {useEffect, useState} from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

// import {AO} from './AO';

export default function Header(){

    // const [loggedInUser, setLoggedinUser] = useOutletContext();
    const [loggedInUser, setLoggedinUser] = useState("");
    // console.log(loggedInUser);
    // const [userdata, setUserdata] = useState("");

    // const refreshAO = () => {
    //     if(loggedInUser!==""){

    //         console.log('loggedInUser = ', loggedInUser);

    //         const jwt = sessionStorage.getItem('jwt');
    //         console.log(jwt);
    //         axios({
    //             method: 'get',
    //             url: 'http://localhost:8080/user/findByEmail',
    //             params: {email: loggedInUser},
    //             // params: {email: loggedInUser.email},
    //             headers: {"Authorization" : `Bearer ${jwt}`}
    //         }).then((response) => {
    //             if (response.status === 200){
    //                 console.log(response.data);
    //                 console.log(response.data.userType);
    //                 // setUserdata(response.data.userType);
    //                 // setLoggedinUser();
    //             }
    //         }).catch(err => {
    //             console.log(err.response);
    //             // setUserdata("Data failure");
    //         })
    //     }
    // };

    // useEffect(() => {
    //     // <AO/>
    //     refreshAO();
    // }, [loggedInUser]);

    // if (loggedInUser==="") {
    //   return <header className="App-header">
    //             <div className="AccountOptions">
    //                 <nav className="AO-nav">
    //                     <Link className="AO-link" to={'/register'} /*onClick={refreshAO}*/>Sign Up</Link>
    //                     <p className="AO-or">or</p>
    //                     <Link className="AO-link" to={'/login'} /*onClick={refreshAO}*/>Login</Link>
    //                 </nav>
    //             </div>
    //          </header>;
    // } else{
    //   return <header className="App-header">
    //             <div className="AccountOptions">
    //                 <nav className="AO-nav">
    //                     {/* <Link className="AO-link" to={'/register'}>Sign Up</Link>
    //                     <p className="AO-or">or</p>
    //                     <Link className="AO-link" to={'/login'}>Login</Link> */}
    //                     <p>Log Out</p>
    //                 </nav>
    //             </div>
    //         </header>;
    // }


    // useEffect(() => {
    //     <AO/>
    // })

    return (
        <header className="App-header">
            {/* refreshAO() */}
            <span className="title"><h1>EnergyAware</h1></span>
            <span><div className="AccountOptions">
                <nav className="AO-nav">
                    <Link className="AO-link" to={'/register'}>Sign Up</Link>
                    <p className="AO-or">or</p>
                    <Link className="AO-link" to={'/login'}>Login</Link>
                </nav>
            </div></span>
        </header>
    )
}