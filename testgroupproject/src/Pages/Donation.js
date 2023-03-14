import React from "react";
import "./Donation.css";

export default function Donation() {
  return (
    // <div><p>This is Donation</p></div>

    <section className="mainContent">
      <div className="newProjects">
        <h3>Upcoming Projects</h3>
        <br />
        <p>
          Here's a few new projects that aim to make renewable energy more
          attainable.
        </p>
        <br />
        <p>
          If you want to help these underfunded projects then you can donate to
          their causes by following the links to their donation pages.
        </p>
        <br />
        <div className="project">
          <h4>Clean Energy Uxbridge</h4>
          <br />
          <p>This community-based project aimed at promoting the use of renewable energy in Uxbridge. 
            The project aims to install solar panels on residential and commercial buildings, 
            as well as develop a community solar farm to provide clean energy to low-income households.</p>
          <p>
            <a href="">Find out more.</a>
          </p>
        </div>
        <br />
        <br />

        <div className="project">
          <h4>Solar for Schools</h4>
          <br />
          <p>Community-driven initiative aimed at promoting the use of renewable energy in local schools and reducing their carbon footprint. 
            The project aims to install solar panels on the roofs of schools to generate clean energy and reduce their dependence on fossil fuels.</p>
          <p>
            <a href="">Find out more.</a>
          </p>
        </div>
        <br />
        <br />
      </div>
      <br />
    </section>
  );
}

