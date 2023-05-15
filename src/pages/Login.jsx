import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import backgroundImage from '../img/bg.avif';


const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer ">
            <div className="formBackground" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="formWrapper ">
        <span className="logo">WeChat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="btn">Sign in</button>
          {err && <span style={{ color: "red" }}>Something went wrong!!</span>}
        </form>
        <p>You don't have an account? <Link to="/register" className="linkto">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;