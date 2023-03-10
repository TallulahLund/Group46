import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    // <div><p>This is AboutUs</p></div>

    <section className="mainContent">
      <div>
        <h3>Who Are We?</h3>
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
          <div><p className="pic"/>Tanish Ahuja</div>
          <div><p className="pic"/>Tiago Esteves</div>
          <div><p className="pic"/>Taiye Ige</div>
          <div><p className="pic"/>Tallulah Lund</div>
          <div><p className="pic"/>Dillion Madhoo</div>
          <div><p className="pic"/>Jaspreet Singh</div>
        </div>
      </div>
    </section>
  );
}
