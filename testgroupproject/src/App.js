// import logo from './logo.svg';
import "./App.css";

import { Link, Outlet, NavLink } from "react-router-dom"; /*added NavLink*/
import React, {createContext, useState} from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {

  const UserContext = createContext();
  const [loggedInUser, setLoggedinUser] = useState("");
  // const UserContext = createContext();

  return (
    <div className="App">
      {/* <head><title>Group Project</title></head> */}

      {/* <Header context={[loggedInUser, setLoggedinUser]}/> */}
      <UserContext.Provider value={loggedInUser}>
        <Header/>
      </UserContext.Provider>
      <nav className="App-nav">
        {/* <Link className="nav-link" to={'/'}>Home</Link>
        <Link className="nav-link" to={'/renewable_energy'}>Renewable Energy</Link>
        <Link className="nav-link" to={'/petitions'}>Petitions</Link>
        <Link className="nav-link" to={'/tips'}>Saving Tips</Link>
        <Link className="nav-link" to={'/quiz'}>Quiz</Link>
        <Link className="nav-link" to={'/donations'}>Donate to Ideas</Link>
        <Link className="nav-link" to={'/about_us'}>About Us</Link>

        <NavLink to={'/about_us'} className={({isActive}) => (isActive ? "nav-link-active" : "nav-link")}>test</NavLink> */}

        {/* changed Link to NavLink */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
          to={"/renewable_energy"}
        >
          Renewable Energy
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
          to={"/petitions"}
        >
          Petitions
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
          to={"/tips"}
        >
          Saving Tips
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
          to={"/quiz"}
        >
          Quiz
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
          to={"/donations"}
        >
          Donate to Ideas
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
          to={"/about_us"}
        >
          About Us
        </NavLink>

        {/* <Link className="nav-link" to={'/register'}>Register</Link>
        <Link className="nav-link" to={'/login'}>Login</Link> */}
        {/* <Link className="nav-link" to={'/help'}>Help</Link> */}
      </nav>
      <main className="App-main">
        {/* <Sidebar/> */}
        
        {/* <Outlet context={[loggedInUser, setLoggedinUser]}/> */}
        <UserContext.Provider value={loggedInUser}>
          <Outlet context={[loggedInUser, setLoggedinUser]}/>
        </UserContext.Provider>
        <Sidebar />
        {/* floating mainContent left fixed the problem */}
      </main>
      <Footer/>
    </div>
  );
}

// export default App;
