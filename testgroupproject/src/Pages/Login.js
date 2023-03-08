// import React from "react";
// import "./Login.css";

// export default function Login() {
//   return (
//     <div>
//       <p>This is Login</p>
//     </div>
//   );
// }







import React, {useRef} from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

export default function Login(props){

    const nav = useNavigate();


    const email=useRef();
    const password=useRef();
    const [loggedInUser, setLoggedinUser] = useOutletContext();

    const validateForm = () => {
        let formValid = false;
        if (email.current.validity.valueMissing
            || password.current.validity.valueMissing){
                alert("Please fill in all text fields.");
        }else if (email.current.validity.typeMismatch){
            alert("Invalid e-mail address. Please enter your e-mail again.");
        }else{
            formValid = true;
        }
        return formValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const dataLogin = {
            username: email.current.value,
            password: password.current.value
        };

        console.log(dataLogin);

        if(validateForm()){
            axios({
                method: 'post',
                url: 'http://localhost:8080/login',
                data: dataLogin
            })
            .then(response=>{
                console.log(response);
                if (response.status === 200){
                    alert("Logged in successfully.")
                    const jwtToken = response.headers.authorization.split(' ')[1]
                    if (jwtToken !== null) {
                        sessionStorage.setItem("jwt", jwtToken);
                        console.log(jwtToken);
                        setLoggedinUser(email.current.value);
                        // setLoggedinUser(response.data);
                        console.log('loggedInUser = ', loggedInUser);
                        console.log('response = ', response);

                        ///////////
                        // loggedInUser.setLoggedinUser(1) -> 1 is true?
                        nav("/");


                    } else{
                        alert("Token failure!");
                        setLoggedinUser("");
                    }
                }else{
                    alert("Login error!")
                    setLoggedinUser("");
                }
            }).then(()=>{
                email.current.value="";
                password.current.value="";
            })
            .catch(error=>{
                alert("Login error!")
                setLoggedinUser("");
                console.log(error);
            })
        }
      }

    return (
        <div className="registrationdiv">
        <form className="registration"/*"form"*/ id="login" noValidate onSubmit={handleSubmit}>
            <label className="labelText">Email:</label>
            <input type="email" ref={email} name="email" required/><br/><br/>

            <label className="labelText">Password:</label>
            <input type="password" ref={password} name="password" required/><br/><br/>
            <div className="submitform"><input type="submit" value="Submit" className="submit"/></div><br/>

            <label className="labelText1">Don't have an account yet? Register <Link to={'/register'}>Here</Link></label>
            {/* <a href="/register">Here</a></label> */}
        </form>
        </div>
    )
}