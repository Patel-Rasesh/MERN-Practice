import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TopMenu = () =>{
    const [userName, setUserName] = useState("");
    let fetchUserName = async (e) => {
        console.log("Inside FetchUserName");
        e.preventDefault();
        try{
            let userId = localStorage.getItem("userId");
            const response = await fetch("http://localhost:3000/api/users/"+userId);
            const data = await response.json();
            setUserName(data[0].firstName+' '+data[0].lastName);
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div class="menu opacity-100">
            <div class="logoClass">
                <img class="logo" src="./Logo-Balloon-RefinedFonts.svg"></img>
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                    <button class="dropdown-item" type="button" onClick={fetchUserName}>
                        <a href="#">Profile</a>
                    </button>
                    <Outlet />
                </li>
                <li><button class="dropdown-item" type="button">Trips</button></li>
                <li><button class="dropdown-item" type="button">Logout</button></li>
                </ul>
            </div>
        </div>
    );
}

export default TopMenu