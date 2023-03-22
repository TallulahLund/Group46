import React from "react";
import "./Petitions.css";

export default function Petitions() {
  return (
    <div className="mainContent">
      {/* <p>This is Petitions</p> */}

      <h3>Petitions</h3>
      <br />
      <p>We post many Petitions aiming for change for the better.</p>
      <p>
        If you want to make a difference and support any of these Petitions
        simply add your signature.
      </p>
      <br />
      <br />

      <div className="petitionsList">
        <div className="petition">
          <div className="pTitle">
            <h4>Petition to make every new detached and semi-detached form of housing include solar panels during the building process in the UK.(11/12/2022)</h4>
            <br></br>
          </div>
          {/* <h4>First Petition</h4> */}
          <br />
          <p>I want the government to make it a legal requirement for housing with acceptable roofing to be used as a platform to install solar panels as a renewable energy source. This would not only benefit the whole of the UK, as our carbon footprint would be reduced but also the energy price for the owner of the house</p>
          <br></br>
          <p>The reason this is specifically during the building process is that it would be cheaper to have the solar panels all planned and fitted during the construction stage than post-construction. If solar panels are taken into consideration before the house has been built, the roof can be angled effectively to maximise solar power generation. I would envision the bill to be worded with the inclusion of a minimum solar panel limit per size of home. This bill would show that houses can be built with renewable energy in mind, paving the way to new ways of efficient renewable energy in the UK.</p>
          <br />

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
            <h4>Petition to have all renewable energy companies handled by the government (06/01/2023)</h4>
          </div>
          <br />
          <p>This petition will push the fact that allowing renewable energy to be supplied by the free market has failed. Therefore, the government must take all the energy assets into its own hands so more schemes can be created. Which will help push toward a renewable energy-driven future. Help nationalise all energy assets for the UK! </p>
          <br />

          <div className="signatureCount">
            <p>75 out of 1,000</p>
          </div>
          <div className="signatureBar">
            <p className="sBar2"></p>
            <p className="sBarGrey2"></p>
          </div>
        </div>
        <div className="petition">
          <div className="pTitle">
            <h4>Stop all new gas, oil, and other finite resource extraction! (05/03/2023)</h4>
          </div>
          <br />
          <p>The government must realise that with new extractions taking place we are not becoming any less dependent on these finite resources. If we want to push renewable energy, we must start by lowering the number of fossil fuels we use. Let's be CO2 free!</p>
          <br />

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
  );
}
