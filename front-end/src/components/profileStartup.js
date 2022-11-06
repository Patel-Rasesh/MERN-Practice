import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ProfileStartup = () => {
    return(
        <>
            <div>
                {/* If this is clicked, call Login component */}
                <Link class="m-3" to="/login">Login</Link>
                {/* If this is clicked, call <Register /> */}
                <Link to="/register">Register</Link>
            </div>
            <Outlet />
        </>
    );
}

export default ProfileStartup