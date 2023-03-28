import petitions from "./PetitionComponents/Petition_content";
import PetitionList from "./PetitionComponents/PetitionList";
import "./Petitions.css";

export default function Petitions() {
  return (
    <div className="petitionList">
      <h1>Petitions</h1>

      <p>We post many Petitions aiming for change for the better.
      <br />
        If you want to make a difference and support any of these Petitions
        simply click on it and add your signature.
      </p>
<div className="petitionLink">
      <PetitionList petitions={petitions} />
      </div>
    </div>
  );
}
