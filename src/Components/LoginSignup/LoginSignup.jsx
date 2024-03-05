import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginSignup=()=> {
const[action,setAction]=useState("S'inscrire")


return( 
<div className='container'>
  <div className="header">
  <div className="text">Stage-Horizon</div>
  <div className="underline"></div>
</div>

<div className="inputs">
{action==="Se connecter"?<div></div>:<div className="input">

<h1><FaUser size='5rem' color='blue'/></h1>
<input type="text" placeholder='Nom' />
</div>}

<div className="input">
<h1><MdEmail size='5rem' color='green'/></h1>
    <input type="email" placeholder='Email'/>
</div>
<div className="input">
<h1><RiLockPasswordFill size='5rem' color='red'/></h1>
    <input type="password" placeholder='Mot de passe'/>
</div>
</div>
{action==="S'inscrire"?<div></div>:<div className="forgot-password">mot de passe oublié ?<span>cliquer ici </span></div>}

<div className="submit-container">
<div className={action=="Se connecter"? "submit gray":"submit"} onClick={()=>{setAction("S'inscrire")}} >S'inscrire</div>
<div className={action=="S'inscrire"? "submit gray":"submit"}  onClick={()=>{setAction("Se connecter")}} >Se connecter</div>
</div>
</div>

);

};
export default LoginSignup;
