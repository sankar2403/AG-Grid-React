import React ,{useState}from 'react'
// import { useNavigate } from 'react-router-dom'
import '../Signup.css'

const Login = () => {
  // let navigate=useNavigate()
  let[email,setEmail] =useState();
  let[password,setPassword]=useState();
  
 
  const handle =(e) =>{
    e.preventDefault();
    if (password === "1234")
    {
      // navigate("/")
      console.log(email,password);
    }
  }
  
  
  return (
    <>

    <form className="main-container" style={{height:"220px"}} onSubmit={handle}>
    <span className="sign">Gmail</span>
    <section className="first">
          <div>
            <label>Email</label>
          </div>
          <div>
            <input type="email" placeholder="Enter the email" style={{width:"220px",height:"20px"}}
            onChange={(e)=>setEmail(e.target.value)}/>
          </div>
        </section>
        <section className="first">
          <div>
            <label>Password</label>
          </div>
          <div>
            <input type="text" placeholder="Enter Password"style={{width:"220px",height:"20px"}}
            onChange={(e)=>setPassword(e.target.value)} />
          </div>
        </section >
        <section>
          <button type="submit">Submit</button>
        </section>

    </form>
    
    </>
  )
}

export default Login