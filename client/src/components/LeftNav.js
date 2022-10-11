import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/LeftNav.css';

const LeftNav = () => {
    return(
        <div className="left-nav-container">
            
                <div className="icons-bis">
                    <NavLink to="/"  className="active-left-nav">
                    <i class="fas fa-home fa-lg"></i>
                    </NavLink>
                    <br/>
                    <NavLink to="/trending"  className="active-left-nav">
                    <i class="fas fa-rocket fa-lg"></i>
                    </NavLink>
                    <br/>
                    <NavLink to="/profil"  className="active-left-nav">
                    <i class="fas fa-user fa-lg"></i>
                    </NavLink>
                </div>
                </div>
    )
}
 export default LeftNav