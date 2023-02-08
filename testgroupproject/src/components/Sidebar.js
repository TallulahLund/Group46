import React from "react";

export default function Sidebar(){
    return (
        <aside className="sidebar">
           {/* <input className="search" type="text" id="search" name="search" placeholder="Search"/> */}
        
            {/* <p className="sidebarcontent">Side Stuff.</p> */}

            <div className="sidebarcontent">
                <h3>Newsletter</h3><br/>
                <p>lil' para</p><br/>
                <p>Read the latest information and be kept up-to-date our current energy situation with our monthly Newsletters.</p>
                <br/>

                <a href="">newsletter: 01/01/2023</a><br/><br/>
                <a href="">newsletter: 01/12/2022</a><br/><br/>

                <p>Sign-up to receive our monthly newsletter emails <a href="">here</a></p>

                <br/>
                <p><strong>What's going on in your area?</strong></p>
                <p>currently ...</p>
            </div>


        </aside>
    )
}