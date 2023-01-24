import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
// import Help from "./components/Help";

//This code expects separate components for each sub-page
//These components - Registration, Home, Login and Help -
//are under a "components" folder
import Registration from "./Pages/Registration";
import RenewableEnergy from "./Pages/RenewableEnergy";
import Petitions from "./Pages/Petitions";
import Tips from "./Pages/Tips";
import AboutUs from "./Pages/AboutUs";
import Donation from "./Pages/Donation";
import Quiz from "./Pages/Quiz";

export default function AppRouter() {
  return (
    //Routes corresponding to Home, Registration, Login, Help.

    <Router>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route index element={<Home />} />
          <Route path={"/renewable_energy"} element={<RenewableEnergy />} />
          <Route path={"/petitions"} element={<Petitions />} />
          <Route path={"/tips"} element={<Tips />} />
          <Route path={"/quiz"} element={<Quiz />} />
          <Route path={"/donations"} element={<Donation />} />
          <Route path={"/about_us"} element={<AboutUs />} />

          <Route path={"/register"} element={<Registration />} />
          <Route path={"/login"} element={<Login />} />
          {/* <Route path={'/help'} element={<Help />}/> */}
        </Route>
      </Routes>
    </Router>
  );
}
