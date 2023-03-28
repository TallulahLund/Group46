import petitions from "./PetitionComponents/Petition_content";
import PetitionList from "./PetitionComponents/PetitionList";
import "./Petitions.css";

export default function Petitions() {
  return (
    <section className="mainContent">
      {/* <h1>Petitions</h1> */}
      <h2>Petitions</h2><br />
      <div className="petitionList">
        {/* <h1>Petitions</h1> */}
        {/* <h2>Petitions</h2><br /> */}

        <p>We post many Petitions aiming for change for the better.
        <br />
          If you want to make a difference and support any of these Petitions
          simply click on it and add your signature.
        </p>
  <div className="petitionLink">
        <PetitionList petitions={petitions} />
        </div>
      </div>
    </section>
  );
}
