import petitions from './PetitionComponents/Petition_content';
import PetitionList from './PetitionComponents/PetitionList';

export default function Petitions() {
  return (
    <div className="mainContent">
      <h1>Petitions</h1>

      <p>We post many Petitions aiming for change for the better.</p>
      <p>
        If you want to make a difference and support any of these Petitions
        simply add your signature.
      </p>

      <PetitionList petitions={petitions} />

    </div>
  );
}
