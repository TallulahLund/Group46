import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Petitions.css";

const PetitionList = ({ petitions }) => {
  var data;
  var i = 0,
    z = 0;
  const [signsCount, setSignsCount] = useState([]);
  const arrayelement = () => {
    z = z + 1;
  };
  useEffect(() => {
    getUserSigns();
  }, []);

  const getUserSigns = () => {
    axios
      .get("/getPetitionSigns")
      .then((response) => {
        data = response.data;
        setSignsCount([...data]);
      })
      .then(() => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const iterateVar = () => {
    i = i + 1;
    arrayelement();
    return signsCount[i - 1];
  };

  return (
    <>
      {petitions.map((petition) => (
        <Link
          className="petitionInfo"
          key={petition.name}
          to={`/petitions/${petition.name}`}
        >
          <h3>{petition.title}</h3>
          <p style={{ marginBottom: "3px" }}>{signsCount[z]} out of 1,000</p>
          <progress
            value={iterateVar()}
            max="1000"
            style={{ height: "18px" }}
          />

          <p>{petition.content[0].substring(0, 300)}...</p>
        </Link>
      ))}
    </>
  );
};

export default PetitionList;
