import React, { useState } from "react";
import './Login.css';
import {useNavigate} from 'react-router-dom';


function Login () {
     const navigate=useNavigate()
    const [userDetails,setUserDetails]=useState({
       name:"",
       email:'',
     
    })
    const onFieldChange=(fieldName,value)=>{

        setUserDetails( (prevState) => {
            return{
                ...prevState,
                [fieldName]:value
            }
         })
    }
  const handleSubmit= async(event)=>{
        console.log(1,2,3)
        event.preventDefault()
         const {name,email}=userDetails
        console.log("name");
        if (name&&email){
            try {
                window.location.replace('https://dapper-duckanoo-378bbe.netlify.app/');

            } catch (error) {
            };
        }
        else{
            console.log(name)
         alert("invalid input")
        };
    }

return (
        <div className="background">
            <div className="Background">

         <div className="formbackground">
         <form className="form" >
           
          <div className="Login">
          <h2>Login to AgriAce</h2>

             </div>
             <div className="AgriAce">

                    
          <input type="text" name ="name"  placeholder="Company Name" required onChange={(e)=>onFieldChange(e.target.name,e.target.value)}/> <br/>

          <input type="text" name="email" placeholder="Company Email" required onChange={(e)=>onFieldChange(e.target.name,e.target.value)} /> <br/>


          <button className="button" type="submit" onClick = { (e) => handleSubmit(e)}>Login</button>


          <h4 id="home"
          >Go back to ?
           <a href="/">Home</a>
          </h4>

          <h4>Don't have an account ?
           <a href="./SignUp">SignUp</a>
          </h4>

         
             </div>



          </form>
         </div>
         
            </div>
            
            </div>
)
}
export default Login;


