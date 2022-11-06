import React from 'react'
const TopMenu = (props) =>{
    return(
        // <div class="menu fixed-top opacity-100">
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
                <li><button class="dropdown-item" type="button">Information</button></li>
                <li><button class="dropdown-item" type="button">Trips</button></li>
                <li><button class="dropdown-item" type="button">Logout</button></li>
                </ul>
            </div>
        </div>
    );
}

export default TopMenu