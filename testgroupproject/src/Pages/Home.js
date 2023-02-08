import React from "react";
import "./Home.css";

export default function Home() {
  return (
    // <div><p>This is home.</p><header>anything</header></div>

    <section className="mainContent">
      <p>
        Spending too much on your energy bill? Or do you simply want to switch
        to a better more sustainable source of energy?
      </p>
      <p>
        We provide quotes comparing different energies to help you find what's
        best for you.
      </p>
      <p>
        Just enter a few details in the calculator below and we can start you
        off switching energy sources.
      </p>
      <br />
      <br />

      <div className="calculator">
        <h3>Energy Quote Calculator</h3>
        <br />
        <p>calculator stuff here</p>
        <br />
      </div>
      <br />

      <div className="myQuotes">
        <h4>Your Quotes:</h4>
        <br />
        <p>You have 1 quote saved.</p>
        <br />

        <div className="quotesList">
          <div className="quote">
            <p>1st quote</p>
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />

      <br />
      <ul className="homeList">
        <li>
          <p>Not sure about making the change to renewable energy just yet?</p>
          <p>
            Find out about each renewable energy{" "}
            <a href="/renewable_energy">here</a>.
          </p>
        </li>
        <br />
        <li>
          <p>Want to reduce your energy bills in the meantime?</p>
          <p>
            Look through our energy ssving tips as well as user-posted tips{" "}
            <a href="/tips">here</a>.
          </p>
        </li>
        <br />
        <li>
          <p>Want to get involved?</p>
          <p>
            Sign up to petitions promoting for change{" "}
            <a href="/petitions">here</a>.
          </p>
        </li>
        <br />
        <li>
          <p>How much do you know about our energy?</p>
          <p>
            Test your knowledge <a href="/quiz">here</a> by taking interacctive
            quizzes.
          </p>
        </li>
        <br />
      </ul>
    </section>
  );
}
