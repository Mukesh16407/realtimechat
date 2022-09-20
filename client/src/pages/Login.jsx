import React, { useState } from 'react'
import {useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

export const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
     if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    }else{
      try {
        toast.loading("Loading...");
        await signInWithEmailAndPassword(auth, email, password);
        toast.dismiss();
        toast.success("Login Successful");
        navigate("/")
      } catch (err) {
        setErr(true);
      }

    } 
    
  };
  return (
    <div className="formContainer">
        <div className='formWrapper'>
        <span className="logo">Real Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Sign Up</button>
            {err && <span>Something went wrong</span>}
        </form>
          <p>You don't have an account?<Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}
