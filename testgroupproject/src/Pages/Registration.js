// import React from "react";
// import "./Registration.css";

// export default function Registration() {
//   return (
//     <div>
//       <p>This is Registration</p>
//     </div>
//   );
// }








import React, {useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function Registration(){

    const nav = useNavigate();

    const name=useRef();
    const email=useRef();
    const password=useRef();
    const repPassword=useRef();
    // const buyer=useRef();
    // const seller=useRef();
    const tos=useRef();

    const validateForm = () => {
        let formValid = false;

        if (name.current.validity.valueMissing 
            || email.current.validity.valueMissing 
            || password.current.validity.valueMissing
            || repPassword.current.validity.valueMissing){
                alert("Please fill in all text fields.");
        }
        else if (email.current.validity.typeMismatch){
            alert("Invalid e-mail address. Please enter your e-mail again.");
        }else if (password.current.validity.tooShort){
            alert("Password is too short. Please select another password");
        } else if(password.value !== repPassword.value) {
            alert("Passwords do not match. Please retry");
        // } else if (!buyer.current.checked && !seller.current.checked){
        //     alert("Please check at least one checkbox to select being a seller or a buyer in the system.")
        } else if (tos.current.validity.valueMissing){
            alert("Please agree to the Terms and Conditions, and Privacy Policy.")
        }else{
            formValid = true;
        }
        return formValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(validateForm()){
            // let buyer_seller=[buyer.current.checked,seller.current.checked]
            let buyer_seller=[false,true];


            // axios.post('https://reqres.in/api/users',{
            axios.post(/*'/user'*/'http://localhost:8080/user',{
                name: name.current.value,
                email: email.current.value,
                password: password.current.value,
                buyer_seller: buyer_seller,
            }).then(response=>{
                console.log(response);
                if (response.status === 201){
                    alert("Registered successfully.")


                    //////////////
                    nav("/login");
                }
            }).then(()=>{
                name.current.value="";
                email.current.value="";
                password.current.value="";
                repPassword.current.value="";
                // buyer.current.checked=false;
                // seller.current.checked=false;
                tos.current.checked=false;
            })
            .catch(error=>{
                console.log(error);
            })
        }
      }

    return (
        <div className="registrationdiv">
        <form className="registration" noValidate onSubmit={handleSubmit}>
            <label className="labelText">Name: </label>
            <input type="text" ref={name} required/><br/><br/>

            <label className="labelText">Email:</label>
            <input type="email" ref={email} name="email" required/><br/><br/>

            <label className="labelText">Password:</label>
            <input type="password" ref={password} name="password" required minLength="8"/><br/><br/>

            <label className="labelText">Re-type password:</label>
            <input type="password" ref={repPassword} name="repPassword" required/><br/><br/>

            <label className="labelText">Date of Birth:</label>
            {/* <input type="day" id="birthday" name="birthday"/><input type="month" id="birthday" name="birthday"/><input type="year" id="birthday" name="birthday"/> */}
            <input type="date" id="birthday" name="birthday" max={new Date()} step="1" required/><br/><br/>

            {/* <input type="checkbox" ref={buyer} name="buyer" value="buyer"/>
            <label>I want to buy produce directly from allotment owners.</label><br/>

            <input type="checkbox" ref={seller} name="seller" value="seller"/>
            <label>I want to sell produce from my allotment.</label><br/><br/> */}

            {/* <div className="cBox"> */}
                <input type="checkbox" ref={tos} name="tos" value="tos" required/>
                <label>I agree to the Terms of Use and Privacy Policy.</label>
            {/* </div> */}
            <br/><br/>

            <div className="submitform">
            <input type="submit" value="Submit" className="submit"/>
            </div>
            <Link to={'/help'}>Learn more</Link><br/><br/>

            <label className="labelText1">Already have an account? Login <Link to={'/login'}>Here</Link></label>
            
        </form>
        </div>
    )
}