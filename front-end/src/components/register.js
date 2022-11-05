import React from 'react';
import { useState } from "react";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleRegistration = async (e) => {
        e.preventDefault();
        try{
            let response = await fetch("http://localhost:3000/api/users", {
                method: "POST",

                // Upon removing headers, null values will get pushed to DB
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({
                    firstName : firstName,
                    lastName : lastName,
                    email : email,
                    password : password
                })
            });
            if (response.status == 200){
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                console.log("User successfully registered!")
            }
            else{
                console.log("Registration failed!");
            }
        }
        catch(err){
            console.log(err);
        }
    };
    return(
        <form onSubmit={handleRegistration} style={{marginLeft: "50px", width: "200px"}}>
            <div class="mb-3">
                <label class="form-label">First Name</label>
                <input type="text" 
                class="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label class="form-label">Last Name</label>
                <input type="text" class="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default Register;