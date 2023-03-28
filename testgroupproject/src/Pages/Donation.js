import React, {useState} from "react";
import "./Donation.css";
import axios from 'axios';



export default function Donation() {
  
  const jwt = localStorage.getItem("jwt");
  const token = jwt
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  const  [Donation, setDonation] =useState({});
  const [damount, setDamount] =useState("");
  const [dname, setDname] =useState("");
  const [demail, setDemail] =useState("");

  //const Donation= {
 //   damount,
 //   dname,
 //   demail
 // }
  const onSubmit =async (event) => {
    event.preventDefault();

    const Donation= {
       damount,
        dname,
         demail
       }

  await axios 
  .post("http://localhost:8080/donations", Donation)
  .then((response) => {
    console.log(response);
    if (response.status === 201){
      console.log(response);
      setDonation("");
      setDamount("");
      setDname("");
      setDemail("");
    }alert("Thanks for your Donation!")
  });
  }

  return (
    <section className="mainContent">
      <div className="newProjects">
        <h3 className="donationh3">Upcoming Projects</h3>
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
          <h4 className="donationh4">Clean Energy Uxbridge</h4>
          <br />
          <p>
            This community-based project aimed at promoting the use of renewable
            energy in Uxbridge. The project aims to install solar panels on
            residential and commercial buildings, as well as develop a community
            solar farm to provide clean energy to low-income households.</p>
            <p>
            <a href=""/*"https://www.hillingdon.gov.uk/" target={_blank}*/ onClick={() => window.open("https://www.hillingdon.gov.uk/", "_blank")}>Find out more.</a>
          </p><br/>
          <form id="donationForm" onSubmit={onSubmit}>
            <label className="donationLabel" htmlFor="amount">
              Donation amount:</label>
            <input type="text" 
            id="damount" 
            name="amount"
            value={damount}
            onChange={(e) => setDamount(e.target.value)} 
            pattern="[0-9]+" 
            title="Please enter a whole number" required />
            <br />
            <label className="donationLabel" htmlFor="name">Name:</label>
            <input type="text" 
            id="dname" 
            name="dname" 
            value={dname}
            onChange={(e) => setDname(e.target.value)}
            br />
            <label className="donationLabel" htmlFor="email">Email:</label>
            <input type="email" 
            id="demail" 
            name="email" 
            value={demail}
            onChange={(e) => setDemail(e.target.value)}
            required />
            <br />
            <button type="submit">Donate</button>
          </form>

        </div>
        <br />
        <br />

        <div className="project">
          <h4 className="donationh4">Solar for Schools</h4>
          <br />
          <p>
            Community-driven initiative aimed at promoting the use of renewable
            energy in local schools and reducing their carbon footprint. The
            project aims to install solar panels on the roofs of schools to
            generate clean energy and reduce their dependence on fossil fuels.</p>
          <p>
            <a href=""/*"https://www.solarforschools.co.uk/" target={_blank}*/ onClick={() => window.open("https://www.solarforschools.co.uk/", "_blank")}>Find out more.</a>
          </p><br/>
          <form id="donationForm" action="http://localhost:3000/donations" method="post">
            <label className="donationLabel" htmlFor="amount">Donation amount:</label>
            <input type="text" id="damount" name="amount" pattern="[0-9]+" title="Please enter a whole number" required />
            <br />
            <label className="donationLabel" htmlFor="name">Name:</label>
            <input type="text" id="dname" name="name" required />
            <br />
            <label className="donationLabel" htmlFor="email">Email:</label>
            <input type="email" id="demail" name="email" required />
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
