import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/LeftNav.css';

const LeftNav = () => {
    return(
        <div className="left-nav-container">
            
                <div className="icons-bis">
                    <NavLink to="/" exact className="active-left-nav">
                    <i class="fas fa-home fa-lg"></i>
                    </NavLink>
                    <br/>
                    <NavLink to="/trending" exact className="active-left-nav">
                    <i class="fas fa-rocket fa-lg"></i>
                    </NavLink>
                    <br/>
                    <NavLink to="/profil" exact className="active-left-nav">
                    <i class="fas fa-user fa-lg"></i>
                    </NavLink>
                </div>

            

        </div>
    )

    

}
 export default LeftNav