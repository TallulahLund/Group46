import React from "react";
import "./RenewableEnergy.css";

import windfarm from "./RenewableComponents/wind farm.jpg";

export default function RenewableEnergy() {
  const dropdownButton = () => {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("re_active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  };

  return (
    // <div><p>This is RenewableEnergy</p></div>

    <section className="mainContent">
      {/*  */}

      <h3>Renewable Energy</h3>
      <br />
      <p>
        There are many different types of renewable energy, explore this section
        to learn about each one.
      </p>
      <br />
      <br />

      <div className="energy">
        <button className="collapsible" noValidate onClick={dropdownButton}>
          <strong>Wind Energy</strong>
        </button>
        <div className="content">
          {/* <p>Wind content</p>
                    <p>Here's some information about wind energy.</p> */}

          <div className="image">
            <img src={windfarm} alt="Burbo Bank Wind Farm" id="windfarmpic" />
            <p>(Burbo Bank Wind Farm, Liverpool)</p>
          </div>
          <p>
            Wind power or wind energy is mostly the use of wind turbines to
            generate electricity. Wind power is a popular, sustainable,
            renewable energy source that has a much smaller impact on the
            environment than burning fossil fuels. Historically, wind power has
            been used in sails, windmills and windpumps but today it is mostly
            used to generate electricity.
            <br />
            <br />
            Wind farms consist of many individual wind turbines, which are
            connected to the electric power transmission network. New onshore
            (on-land) wind farms are cheaper than new coal or gas plants, but
            expansion of wind power is being hindered by fossil fuel subsidies.
            Onshore wind farms have a greater visual impact on the landscape
            than some other power stations. Small onshore wind farms can feed
            some energy into the grid or provide power to isolated off-grid
            locations. Offshore wind farms deliver more energy per installed
            capacity with less fluctuations and have less visual impact.
            Although there is less offshore wind power at present and
            construction and maintenance costs are higher, it is expanding.
            Offshore wind power currently has a share of about 10% of new
            installations.
          </p>
          {/* <img src={windfarm} alt="Burbo Bank Wind Farm" id="windfarmpic"/> */}
          {/* <br/> */}
          <p>- from wikipedia</p>
        </div>
      </div>

      <div className="energy">
        <button className="collapsible" noValidate onClick={dropdownButton}>
          <strong>Solar Energy</strong>
        </button>
        <div className="content">
          <p>Solar content</p>
          <p>Here's some information about solar energy.</p>
        </div>
      </div>

      {/* <div className="collaspible"><p> test para </p></div> */}

      <div className="energy">
        <button className="collapsible" noValidate onClick={dropdownButton}>
          <strong>Bio Energy</strong>
        </button>
        <div className="content">
          <p>Bio content</p>
          <p>Here's some information about bio energy.</p>
        </div>
      </div>

      {/* <script>
                    var coll = document.getElementsByClassName("collapsible");
                    var i;
                    
                    for (i = 0; i < coll.length; i++) {
                      coll[i].addEventListener("click", function() {
                        this.classList.toggle("active");
                        var content = this.nextElementSibling;
                        if (content.style.maxHeight){
                          content.style.maxHeight = null;
                        } else {
                          content.style.maxHeight = content.scrollHeight + "px";
                        } 
                      });
                    }
                </script> */}

      <div className="energy">
        <button className="collapsible" noValidate onClick={dropdownButton}>
          <strong>Wave Energy</strong>
        </button>
        <div className="content">
          <p>Wave content</p>
          <p>Here's some information about wave energy.</p>
        </div>
      </div>
    </section>
  );
}
