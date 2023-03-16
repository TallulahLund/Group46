import React, {useContext} from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

import "./Home.css";

import UserContext from '../App.js';


import Header from '../components/Header.js';

export default function Home() {

  const user = useContext(UserContext);
    console.log("user= ", user);

  // 
  const [loggedInUser, setLoggedinUser] = useOutletContext();
  console.log("home liu=", loggedInUser);
    
  const nav = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("jwt");
    setLoggedinUser("");
    nav("/login");
    // nav("/");        need to refresh home page -> need to put logout in header
  }


  if (loggedInUser === "")
  {
    return (
      // <div><p>This is home.</p><header>anything</header></div>
  
      // <section>
        /* <Header props={[loggedInUser, setLoggedinUser]}/> */
      <>

        

      <section className="mainContent">
  
        {/*  */}
        {/* <p>
        {/* <button className="AO-link" onClick={logout}>Log Out</button> *}
          <Link className="AO-link" to={'/register'}>Sign Up</Link>
          <p className="AO-or">or</p>
          <Link className="AO-link" to={'/login'}>Login</Link>
        </p> */}
        {/* <br/><br/><br/>
         */}
        {/*  */}
  
        <div className="intro">
          <div className="introPara">
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
          </div>
        

          <div className="reg">
          {/* <button className="AO-link" onClick={logout}>Log Out</button> */}
            <Link className="AO-link" to={'/register'}>Sign Up</Link>
            <p className="AO-or">or</p>
            <Link className="AO-link" to={'/login'}>Login</Link>
          </div>
        </div>

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
              Look through our energy saving tips as well as user-posted tips{" "}
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
              Test your knowledge <a href="/quiz">here</a> by taking interactive
              quizzes.
            </p>
          </li>
          <br />
        </ul>
      </section>

      {/* <p className="reg">
      {/* <button className="AO-link" onClick={logout}>Log Out</button> *}
        <Link className="AO-link" to={'/register'}>Sign Up</Link>
        <p className="AO-or">or</p>
        <Link className="AO-link" to={'/login'}>Login</Link>
      </p> */}


      </>
  
      // {/* </section> */}
    );
  }
  else 
  {
  return (
    // <div><p>This is home.</p><header>anything</header></div>

    // <section>
      /* <Header props={[loggedInUser, setLoggedinUser]}/> */

    <section className="mainContent">

      {/*  */}
      {/* <p>
      <button className="AO-link" onClick={logout}>Log Out</button>
      </p>
      <br/><br/><br/> */}
      {/*  */}

      {/* <p>
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
      </p> */}

      <div className="intro">
        <div className="introPara">
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
        </div>
      
        {/* <div className="reg"> */}
          <div className="reg">
          <button className="AO-link" onClick={logout}>Log Out</button>
            {/* <Link className="AO-link" to={'/register'}>Sign Up</Link>
            <p className="AO-or">or</p>
            <Link className="AO-link" to={'/login'}>Login</Link> */}
          </div>
        {/* </div> */}
      </div>


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

    // {/* </section> */}
  );
  }
}
