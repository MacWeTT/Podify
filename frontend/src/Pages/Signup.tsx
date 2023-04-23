import React from "react";
import { Link } from "react-router-dom";


type Props = {};

const Signup = (props: Props) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return <div className="bg-back font-montserrat h-screen">
  <div className="login-container rounded-lg border-2 border-black-500 flex-col bg-primary items-center">
  <h1 className="text-3xl text-senary font-bold text-center my-4">Register</h1>
  <h2 className="text-center text-senary font-bold my-4">Enter your e-mail and password to register</h2>
      <form onSubmit={handleSubmit} method="post" className="m-4">
        <label className="text-senary" >Username</label> 
            <input type="text" name="username" id="username"  className="p-4 border-2 border-black-500 rounded-lg w-full my-4"
            placeholder="Your name"/>
        <br />
          <label className="text-senary" >Email</label> 
          <input type="text" name="email" id="email"  className="p-4 border-2 border-black-500 rounded-lg w-full my-4"
          placeholder="Your e-mail address"/>
        <br />
          <label className="text-senary">Password</label> 
          <input type="password" name="password" id="password" className="p-4 border-2 border-black-500 rounded-lg w-full my-4" 
          placeholder="Your password"/>
        <br />
          <button type="submit" className="p-4 my-8 border-2 border-black-500 rounded-lg w-full bg-quaternary text-white font-semibold">Register</button>
          <p className="text-senary text-center">Already have an account?  
            <Link to="/login" className="text-septenary font-medium">
             Login
            </Link>
          </p>
      </form>
  </div>
</div>;
};

export default Signup;
