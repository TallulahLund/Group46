import React from "react";
import "./Donation.css";

export default function Donation() {
  return (
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
          their causes by filling out the form below.
        </p>
        <br />
        <div className="project">
          <h4>Clean Energy Uxbridge</h4>
          <br />
          <p>
            This community-based project aimed at promoting the use of renewable
            energy in Uxbridge. The project aims to install solar panels on
            residential and commercial buildings, as well as develop a community
            solar farm to provide clean energy to low-income households.</p>
          <p>
            <a href="">Find out more.</a>
          </p><br/>
          <form action="http://localhost:3000/donations" method="post">
            <label htmlFor="amount">Donation amount:</label>
            <input type="text" id="amount" name="amount" pattern="[0-9]+" title="Please enter a whole number" required />
            <br />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <button type="submit">Donate</button>
          </form>

        </div>
        <br />
        <br />

        <div className="project">
          <h4>Solar for Schools</h4>
          <br />
          <p>
            Community-driven initiative aimed at promoting the use of renewable
            energy in local schools and reducing their carbon footprint. The
            project aims to install solar panels on the roofs of schools to
            generate clean energy and reduce their dependence on fossil fuels.</p>
          <p>
            <a href=""/*"https://www.solarforschools.co.uk/" target={_blank}*/ onClick={() => window.open("https://www.solarforschools.co.uk/", "_blank")}>Find out more.</a>
          </p><br/>
          <form action="http://localhost:3000/donations" method="post">
            <label htmlFor="amount">Donation amount:</label>
            <input type="text" id="amount" name="amount" pattern="[0-9]+" title="Please enter a whole number" required />
            <br />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <button type="submit">Donate</button>
          </form>
        </div>
        <br />
        <br />
      </div>
      <br />
    </section>
  );
}
