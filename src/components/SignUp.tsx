"use client"
import { signup } from "@/app/actions/user";
import axios from "axios";
import React, { useState } from "react";

function SignUp() { 

    const [email, setEmail] = useState("")  ;
    const [password, setPassword] = useState("") ;

    const handleClick = () => {
         signup(email,password);
    }
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-4 p-10  rounded-xl h-screen">
           <div className="flex flex-col border p-10 rounded-lg border-white justify-center">
           <input
          className="bg-white  rounded text-black  m-2 p-2"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="bg-white text-black rounded p-2 m-2 "
          type="password"
          placeholder="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        ></input>
        <button onClick={handleClick} className="m-2" >Sign Up</button>
           </div>
      </div>
    </>
  );
}

export default SignUp;
