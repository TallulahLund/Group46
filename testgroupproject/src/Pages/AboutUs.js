import React from "react";
import "./AboutUs.css";

import infpic from "./AboutUsComponents/image-not-found.jpg";
import tiagoPic from "./AboutUsComponents/Tiago.JPG";
import taiyePic from "./AboutUsComponents/Taiye.JPG";
import jaspreetPic from "./AboutUsComponents/Jaspreet.JPG";
import tanishPic from "./AboutUsComponents/Tanish.JPG";
import dillionPic from "./AboutUsComponents/Dillion.JPG";

export default function AboutUs() {
  return (
    // <div><p>This is AboutUs</p></div>

    <section className="mainContent">
      <div>
        {/* <h3>Who Are We?</h3> */}
        <h2>Who Are We?</h2>
        <br />
        <p>
          EnergyAware is a web application designed to promote Affordable and
          Clean Energy, the UN's 7th Sustainable Development Goal. We aim to
          make our users more aware of our current energy situation, encourage
          them to switch to sustainable renewable energies, urge them to help
          petition for change, as well as sharing useful energy saving tips.
        </p>
        <br />
        <br />
        <h3>Meet The Team</h3>
        <br />
        <div className="teammembers">
          {/* <span>{/*<p/>*}Tanish Ahuja</span>
          <span>Tiago Esteves</span>
          <span>Taiye Ige</span>
          <span>Tallulah Lund</span>
          <span>Dillion Madhoo</span>
          <span>Jaspreet Singh</span> */}
          <div><img className="pic" src={tanishPic} alt=""/>Tanish Ahuja</div>
          <div><img className="pic" src={tiagoPic} alt=""/>Tiago Esteves</div>
          <div><img className="pic" src={taiyePic} />Taiye Ige</div>
          <div><img className="pic" src={infpic} alt=""/>Tallulah Lund</div>
          <div><img className="pic" src={dillionPic} alt=""/>Dillion Madhoo</div>
          <div><img className="pic" src={jaspreetPic} alt=""/>Jaspreet Singh</div>
        </div>
      </div>
    </section>
  );
}
