import React from "react";

export default function Petitions(){
    return (
        <div className="mainContent">
            {/* <p>This is Petitions</p> */}
            

            <h3>Petitions</h3><br/>
            <p>We post many Petitions aiming for change for the better.</p>
            <p>If you want to make a difference and support any of these Petitions simply add your signature.</p>
            <br/><br/>

            <div className="petitionsList">
                <div className="petition">
                    <div className="pTitle">
                        <h4>First Petition</h4>
                        <p>-posted: 11/12/2022</p>
                    </div>
                    {/* <h4>First Petition</h4> */}
                    <br/>
                    <p>lil' para bout petition.</p><br/>

                    <div className="signatureCount">
                        <p>576 out of 1,000</p>
                    </div>
                    <div className="signatureBar">
                        <p className="sBar"></p>
                        <p className="sBarGrey"></p>
                    </div>
                </div>

                <div className="petition">
                    <div className="pTitle">
                        <h4>Second Petition</h4>
                        <p>-posted: 06/01/2023</p>
                    </div>
                    <br/>
                    <p>lil' para bout petition.</p><br/>

                    <div className="signatureCount">
                        <p>75 out of 1,000</p>
                    </div>
                    <div className="signatureBar">
                        <p className="sBar2"></p>
                        <p className="sBarGrey2"></p>
                    </div>
                </div>
            </div>

        </div>
    )
}