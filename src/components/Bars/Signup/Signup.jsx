import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../Signup.css";
const Signup = () => {
  // let navigate = useNavigate();
  let [firstname , setFirstName] = useState();
  let [lastname , setLastName] = useState();
  let [password ,setPassword] = useState();
  let [confirmpassword , setConfirmPassword] = useState();
  
  const handledata = (e)=>{
     e.preventDefault();
     if(password === confirmpassword)
     {
          //  navigate("/login")
           console.log(firstname, lastname,password)
     }
     else
     {
          console.log("Password Mismatched")
     }
  }
  
  return (
    <>
      <form className="main-container" onSubmit={handledata}>
        <span className="sign">Sign Up</span>
        <section className="first">
          <label> First Name</label>
          <input
            type="text"
            placeholder="Enter the first name"
            style={{ width: "220px", height: "20px" }}
            onChange= {(e)=>{
              setFirstName(e.target.value)
            }}
          />
        </section>
        <section className="first">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            style={{ width: "220px", height: "20px" }}
            onChange= {(e)=>{
              setLastName(e.target.value)
            }}
          />
        </section>
        <section className="first">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            style={{ width: "220px", height: "20px" }}
            onChange= {(e)=>{
              setPassword(e.target.value)
            }}
          />
        </section>
        <section className="first">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            style={{ width: "220px", height: "20px" }}
            onChange= {(e)=>{
              setConfirmPassword(e.target.value)
            }}
          />
        </section>
        <section>
          <button type="submit">Submit</button>
        </section>
      </form>
    </>
  );
};

export default Signup;
