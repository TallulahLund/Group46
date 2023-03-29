import { useParams } from "react-router-dom";
import React, { useRef } from "react";
import petitions from "./PetitionComponents/Petition_content";
import NotFoundPage from "./PetitionComponents/NotFoundPage";
import badlang from "./TipsComponents/badLang.json";
import axios from "axios";
import "./Petitions.css";


const PetitionSignForm = () => {
  const Fname = useRef();
  const Lname = useRef();
  const email = useRef();
  const birthday = useRef();
  const monthlyemail = useRef();

  const { petitionId } = useParams();
  const petition = petitions.find((petition) => petition.name === petitionId);

  if (!petition) {
    return <NotFoundPage />;
  }

const checkTextField = (firstname, lastname) =>{

let nonvalidtext = true;
let subfname = firstname.substring(1);
let sublname = lastname.substring(1);

if(firstname.indexOf(' ')>= 0 || lastname.indexOf(' ')>= 0){
  alert("Text fields cannot contain spaces!");

} else if(firstname.match(/[0-9]/g)!=null || lastname.match(/[0-9]/g)!=null){
  alert("Text fields cannot contain digits!");

} else if(firstname.match(/[^a-zA-Z ]/g)!=null || lastname.match(/[^a-zA-Z ]/g)!=null){
  alert("Text fields cannot contain punctuation!");

}else if (firstname.match(/^[A-Z]/)==null || lastname.match(/^[A-Z]/)==null){
  alert("The first letter must be in UPPER case!");
} else if(subfname.match(/[A-Z]/)!=null || sublname.match(/[A-Z]/)!=null){
  alert("Text Fields cannot contain UPPER case letters after the 1st letter!");
}else{
  nonvalidtext = false;
}

return nonvalidtext;
}

const checkInappropriateWords = (firstname, lastname) =>{

if(typeof firstname==='string' && typeof lastname ==='string'){
firstname = firstname.toLocaleLowerCase();
lastname = lastname.toLocaleLowerCase();
}

for(var i = 0; badlang.length; i++){

  if(typeof badlang[i] ==='string')
  badlang[i] = badlang[i].toLocaleLowerCase();

  if(firstname === badlang[i] || lastname === badlang[i]){
    return true;
  }
    
}

return false;

}


  const checkUserAge = () => {
    var today = new Date();
    var birthdate = new Date(birthday.current.value);

    var age = today.getFullYear() - birthdate.getFullYear();

    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }

    if (age > 18 && age < 70) {
      return false;

    } else {

      return true;
    }
  };

/*Confirms if all the information is correct*/
  const validateForm = () => {
    let formValid = false;

    if (
      Fname.current.validity.valueMissing ||
      Lname.current.validity.valueMissing ||
      email.current.validity.valueMissing  ||
      birthday.current.validity.valueMissing
    ) {
      alert("Please fill in all the fields.");
    } else if (email.current.validity.typeMismatch) {
      alert("Invalid e-mail address. Please enter your e-mail again.");
    } else if (checkUserAge()) {
      alert("18 years old or above!");
    } else if(checkTextField(Fname.current.value,Lname.current.value)){
      console.log("Check Again!");
    }/*else if(checkInappropriateWords(Fname.current.value, Lname.current.value)){
      alert("Name Inappropriate!");
    } */else {
      formValid = true;
    }
    return formValid;
  };

  /*Submits the form successfully if all the information is correct*/
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios.post('/petition', {
          Fname: Fname.current.value,
          Lname: Lname.current.value,
          email: email.current.value,
          birthday: birthday.current.value,
          monthlyemail: monthlyemail.current.checked,
          petitionname: petition.name,
        }).then((response) => {
          console.log(response);
          if (response.status === 201) {
            alert("Form submitted with success.");
          }
        }).then(() => {
          Fname.current.value = "";
          Lname.current.value = "";
          email.current.value = "";
          birthday.current.value = "";
          monthlyemail.current.checked = false;
        }).catch((error) => {
          console.log(error);
        });
    }
  };

  /*HTML displayed on the page*/
  return (
    <div className="petitionForm">
      {/* <h1>{petition.title}</h1> */}
      <h3>{petition.title}</h3><br />
      {petition.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <div className="dataForm">
      <form noValidate onSubmit={handleSubmit}>
        <label><span> First Name<span className="required">*</span></span></label>
        <input className="textarea" type="text" ref={Fname} name="Fname" required></input>

        <br />
        <label><span>Last Name<span className="required">*</span></span></label>
        <input className="textarea" type="text" ref={Lname} name="Lname" required></input>

        <br />
        <label><span>Email<span className="required">*</span></span></label>
        <input className="textarea" type="email" ref={email} name="email" required></input>

        <br />
        <label><span>Birthday<span className="required">*</span></span></label>
        <input className="textarea" type="date" ref={birthday} name="birthday" required></input>

        <br />
        <input
          type="checkbox"
          ref={monthlyemail}
          name="monthlyemail"
          value="monthlyemail"
        ></input>
        <lable><span id="checkbox">Receive monthly emails with news?</span></lable>
        <br />
        <input id="Submit" type="submit" value="Submit"></input>
      </form>
      </div>
    </div>
  );
};

export default PetitionSignForm;
