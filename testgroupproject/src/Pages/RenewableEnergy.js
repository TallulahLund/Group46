// import React from "react";
// import "./RenewableEnergy.css";

// import windfarm from "./RenewableComponents/wind farm.jpg";

// export default function RenewableEnergy() {
//   const dropdownButton = () => {
//     var coll = document.getElementsByClassName("collapsible");
//     var i;
//     for (i = 0; i < coll.length; i++) {
//       coll[i].addEventListener("click", function () {
//         this.classList.toggle("re_active");
//         var content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//           content.style.maxHeight = null;
//         } else {
//           content.style.maxHeight = content.scrollHeight + "px";
//         }
//       });
//     }
//   };

//   return (
//     // <div><p>This is RenewableEnergy</p></div>

//     <section className="mainContent">
//       {/*  */}

//       <h3>Renewable Energy</h3>
//       <br />
//       <p>
//         There are many different types of renewable energy, explore this section
//         to learn about each one.
//       </p>
//       <br />
//       <br />

//       <div className="energy">
//         <button className="collapsible" noValidate onClick={dropdownButton}>
//           <strong>Wind Energy</strong>
//         </button>
//         <div className="content">
//           {/* <p>Wind content</p>
//                     <p>Here's some information about wind energy.</p> */}

//           <div className="image">
//             <img src={windfarm} alt="Burbo Bank Wind Farm" id="windfarmpic" />
//             <p>(Burbo Bank Wind Farm, Liverpool)</p>
//           </div>
//           <p>
//             Wind power or wind energy is mostly the use of wind turbines to
//             generate electricity. Wind power is a popular, sustainable,
//             renewable energy source that has a much smaller impact on the
//             environment than burning fossil fuels. Historically, wind power has
//             been used in sails, windmills and windpumps but today it is mostly
//             used to generate electricity.
//             <br />
//             <br />
//             Wind farms consist of many individual wind turbines, which are
//             connected to the electric power transmission network. New onshore
//             (on-land) wind farms are cheaper than new coal or gas plants, but
//             expansion of wind power is being hindered by fossil fuel subsidies.
//             Onshore wind farms have a greater visual impact on the landscape
//             than some other power stations. Small onshore wind farms can feed
//             some energy into the grid or provide power to isolated off-grid
//             locations. Offshore wind farms deliver more energy per installed
//             capacity with less fluctuations and have less visual impact.
//             Although there is less offshore wind power at present and
//             construction and maintenance costs are higher, it is expanding.
//             Offshore wind power currently has a share of about 10% of new
//             installations.
//           </p>
//           {/* <img src={windfarm} alt="Burbo Bank Wind Farm" id="windfarmpic"/> */}
//           {/* <br/> */}
//           <p>- from wikipedia</p>
//         </div>
//       </div>

//       <div className="energy">
//         <button className="collapsible" noValidate onClick={dropdownButton}>
//           <strong>Solar Energy</strong>
//         </button>
//         <div className="content">
//           <p>Solar content</p>
//           <p>Here's some information about solar energy.</p>
//         </div>
//       </div>

//       {/* <div className="collaspible"><p> test para </p></div> */}

//       <div className="energy">
//         <button className="collapsible" noValidate onClick={dropdownButton}>
//           <strong>Bio Energy</strong>
//         </button>
//         <div className="content">
//           <p>Bio content</p>
//           <p>Here's some information about bio energy.</p>
//         </div>
//       </div>

//       {/* <script>
//                     var coll = document.getElementsByClassName("collapsible");
//                     var i;
                    
//                     for (i = 0; i < coll.length; i++) {
//                       coll[i].addEventListener("click", function() {
//                         this.classList.toggle("active");
//                         var content = this.nextElementSibling;
//                         if (content.style.maxHeight){
//                           content.style.maxHeight = null;
//                         } else {
//                           content.style.maxHeight = content.scrollHeight + "px";
//                         } 
//                       });
//                     }
//                 </script> */}

//       <div className="energy">
//         <button className="collapsible" noValidate onClick={dropdownButton}>
//           <strong>Wave Energy</strong>
//         </button>
//         <div className="content">
//           <p>Wave content</p>
//           <p>Here's some information about wave energy.</p>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import "./RenewableEnergy.css";
import {Link, useNavigate} from "react-router-dom";

import windfarm from "./RenewableComponents/wind farm.jpg";

export default function RenewableEnergy() {

  const nav = useNavigate();

  // const dropdownButton = () => {
    function dropdownButton() {
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

      {/* <h3>Renewable Energy</h3> */}
      <h2>Renewable Energy</h2>
      <br />
      <p>
        When energy comes from a source that is not depleted when used, it is renewable.
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
          {/* <p>
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
          {/* <br/> *}
          <p>- from wikipedia</p> */}

          {/* group */}
          <p><strong>What is Wind Energy?</strong></p>
          <p>Wind energy is created when the wind causes propeller-like blades, which create kinetic energy. This energy is then transformed into electricity. This resource is very common and can be very effective based on where the turbines are placed. For example, if placed near a coast, the coastal winds will cause the propellers to turn, which generates electricity.</p>

          <p><strong>How affordable is Wind Energy?</strong></p>
          <p>Wind turbines can be pricey, however, as it is one of the most researched and developed clean energy resources, it has undergone many drops in price. It is affordable for some of the general population to purchase, but it depends on how strong you want the turbine to be. Some wind turbines can generate 1.5kW, and some 15kW. If you wanted to go for the lesser option, you would be looking at a total upfront cost of around £7000, which, for a renewable energy source, is very affordable.</p>

          <p><strong>Why Wind?</strong></p>
          <p>Depending on the area, wind can generate an immense amount of electricity as the wind can be everlasting in some areas. When generating electricity, there are absolutely no carbon emissions, making it safe for the environment. In the UK, wind turbines are generating electricity 70-80% of the time, making them a reliable source of energy. The final reason is just how cheap wind energy is. Out of all of the big renewable energy sources, wind is by far the cheapest.</p>

          <p><strong>A Heads Up:</strong></p>
          <p>Wind energy might be cheap and effective, but there are some downsides too. As the energy production from the turbines relies solely on the wind, there is a sense of unpredictability because the wind can very easily just come and go, depending on the area of the wind turbine. Along with this, there are also issues like low-level noise pollution and the lack of an aesthetically pleasing design. If these may be issues for you, then it might be best to look at the array of other renewable sources on this website.</p>

          <p><strong>Schemes:</strong></p>
          <p>Green Deal is a scheme that allows you to get a loan from the government to purchase any equipment necessary to generate clean and renewable energy. There is also a government-run scheme known as Contracts for Difference (CfD) which is the government's main scheme for supporting renewable energy with low carbon emissions.</p>

          <p><strong>Fun Fact:</strong></p>
          <p>The UK is currently the global leader in offshore wind energy. The offshore wind turbines generated 10% of the UK’s energy! Wind energy contributed to 26.1% of the UK’s total electricity generation!</p>

          <p><strong>Want a Quote?</strong></p>
          <p>Use our <a href="/">Calculator</a>{/*<Link to={'/'}>Calculator</Link>*/} to get quoted for wind energy in your area!</p>

          <br/>
          
        </div>
      </div>

      <div className="energy">
        <button className="collapsible" noValidate onClick={dropdownButton}>
          <strong>Solar Energy</strong>
        </button>
        <div className="content">
          {/* <p>Solar content</p>
          <p>Here's some information about solar energy.</p> */}
          <p><strong>What is Solar Energy? </strong></p>
          <p>Through the use of solar architecture known as solar panels, It is possible to use solar light and heat to generate electricity and thermal energy. Solar energy is an inexhaustible resource as the light and heat of the sun can never run out. It also has other purposes such as heating air and water.
</p>
          <p><strong>How affordable is Solar Energy?</strong></p>
          <p>Now, solar energy has a track record for having a high initial startup cost. However, as of late, solar has lowered in price. So much so that it was crowned the cheapest energy source in 2021.</p>
          <p><strong>Why Solar?</strong></p>
          <p>Solar is becoming one of the most popular and affordable sources of renewable energy. Especially with the current rise in electricity bills, generating your own power saves a lot of money in the long run. More specifically, at some points, 90%! Even if the upfront cost is large, it still generates enough electricity to make a difference. </p>
          <p><strong>A Heads Up:</strong></p>
          <p>Solar may be the most affordable to the general population, however, there are some initial issues to take into consideration. Solar panelling may not be compatible with your roof, so get that checked before making any investments. Also, the most obvious one is, the sun must be visible for the solar panels to be effective. If the day is not clear then the solar panels cannot be utilised effectively. Following on from this, Solar energy only works in the daytime. Therefore during the night, no energy will be produced.</p>
          <p><strong>Schemes:</strong></p>
          <p>Currently, there is a scheme known as the ECO4 scheme, that offers a grant for discounted solar panels in the UK. Another UK government Scheme is the Green Deal. This is a loan given by the government to help pay for renewable energy resources, helping you with the high upfront costs of solar panels. </p>
          <p><strong>Fun Fact:</strong></p>
          <p>China is the leading producer of solar energy. Generating a staggering 340GW!</p>
          <p><strong>Want a Quote?</strong></p>
          <p>Use our {/*<a onClick={() => nav('/')}>Calculator</a>*/}<a href="/">Calculator</a>{/*<Link to={'/'}>Calculator</Link>*/} to get quoted for solar energy in your area!</p>

          <br/>
        </div>
      </div>

      <div className="energy">
        <button className="collapsible" noValidate onClick={dropdownButton}>
          <strong>Hydro Energy</strong>
        </button>
        <div className="content">
          <p><strong>What is Hydro Energy?</strong></p>
          <p>Hydro-Electric Energy is energy that is created by water flowing through a dammed area which flows over a turbine. That turbine creates kinetic energy which powers a generator. The water can be reused at other generators. Hydropower is completely CO2 free making it safe for the environment.</p>
          <p><strong>How Affordable is Hydro-Energy?</strong></p>
          <p>Now, hydroelectric solutions may not be possible to achieve for every house, but since you can use already constructed structures such as dams and bridges, this cuts the upfront cost down significantly. Making hydro energy very affordable if you have the required resources, such as a free-flowing water source and potentially a dam/bridge.</p>
          <p><strong>Why Hydro?</strong></p>
          <p>Hydro energy is a Carbon emission-free renewable energy source. Due to the nature of how the energy is converted, you can provide almost infinite amounts of energy with the same source of free-flowing water. All that has to be done is to set up the kinetic generators all throughout the body of water. Therefore, making hydro energy very efficient and very consistent, as you will never run out of water in a naturally occurring body of water.</p>
          <p><strong>A Heads Up:</strong></p>
          <p>Hydroelectricity is only efficient when you have a body of free-flowing water. If the water is stagnant then it will not generate any kinetic energy. Therefore making the conditions for this energy source very difficult to obtain. As well as this, if there is no Dam or Bridge present, constructing one may be costly. If you cannot meet any of these requirements, it may be best to look at an alternative source of energy.</p>
          <p><strong>Schemes:</strong></p>
          <p>The Green Deal is a renewable energy scheme that allows people to take loans from the government as long as it is used to purchase items and parts for a renewable energy source. Making buying a hydro pump a little easier.</p>
          <p><strong>Fun Fact:</strong></p>
          <p>China is the leading producer of hydroelectric power, generating 856.35 billion kW a year. Brazil at 2nd generates 411.9 billion kW a year. What a huge gap!</p>
          <p><strong>Want a Quote?</strong></p>
          <p>Use our <a href="/">Calculator</a>{/*<Link to={'/'}>Calculator</Link>*/} to get quoted for hydro energy in your area! </p>
          <br/>
        </div>
      </div>

      <div className="energy">
        <button className="collapsible" noValidate onClick={dropdownButton}>
          <strong>Geothermal Energy</strong>
        </button>
        <div className="content">
          <p><strong>What is Geothermal Energy?</strong></p>
          <p>Geothermal energy is the heat of the Earth’s core, which can be harvested and transformed for human use. It can be used either for heating purposes, or the steam it generates can be used as power for appliances.</p>
          <p><strong>How Affordable is Geothermal Energy?</strong></p>
          <p>Geothermal energy is a little more on the expensive side, coming in at around £10k-20k. This cost is for the underground geothermal pump system that acts as the management for all of the heat that geothermal energy emits. However, it is way cheaper than using fossil fuels as most of the cost is spent upfront. In the long run, it saves significantly more money than it would if you used fossil fuels. Sometimes up to even 80% of money can be saved using geothermal over regular electricity.</p>
          <p><strong>Why Geothermal?</strong></p>
          <p>Similar to hydroelectric energy, it is consistently available. The Earth will always generate heat for as long as it is alive. Therefore you will not have to wait for a clear day or a windy day like the other renewable energy sources. As mentioned earlier, it also saves a lot of money in the long run in comparison to fossil fuels. Geothermal energy is mainly used as an alternative to heating systems in a house, more specifically, underground heating. </p>
          <p><strong>A Heads Up:</strong></p>
          <p>There are specific land requirements that have to be met for a geothermal system to be installed. As well as this, it is not a 100% clean source of energy. If this is a concern for you, maybe another renewable energy source may be a better fit for you. Also, as mentioned in an earlier point, the costs for such a system to be installed can cost upwards of £10k. Making this quite an expensive investment.</p>
          <p><strong>Schemes:</strong></p>
          <p>Green Deal is a UK scheme where the government offers a loan to civilians that would like to invest in renewable energy. Even though this needs to be paid back, it allows for someone to deal with the upfront cost of equipment such as geothermal pumps with a lot less hassle.</p>
          <p><strong>Fun Fact:</strong></p>
          <p>In 2021, the US was the leading producer of geothermal energy, generating a whooping 3.7 gW! And second, was Indonesia with 2.3 gW. </p>
          <p><strong>Want a Quote?</strong></p>
          <p>Use our <a href="/">Calculator</a>{/*<Link to={'/'}>Calculator</Link>*/} to get quoted for geothermal energy in your area!</p>
          {/* <p><strong></strong></p>
          <p></p> */}
          <br/>
        </div>
      </div>

      {/* <div className="collaspible"><p> test para </p></div> */}

      {/* <div className="energy">
        <button className="collapsible" noValidate onClick={dropdownButton}>
          <strong>Bio Energy</strong>
        </button>
        <div className="content">
          <p>Bio content</p>
          <p>Here's some information about bio energy.</p>
        </div>
      </div> */}

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

      {/* <div className="energy">
        <button className="collapsible" noValidate onClick={dropdownButton}>
          <strong>Wave Energy</strong>
        </button>
        <div className="content">
          <p>Wave content</p>
          <p>Here's some information about wave energy.</p>
        </div>
      </div> */}
    </section>
  );
}
