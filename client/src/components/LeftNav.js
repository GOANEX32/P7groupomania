import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
    return(
        <div className="left-nav-container">
            <div className="icons">
                <div className="icons-bis">
                    <NavLink to="/" exact className="active-left-nav">
                    <i class="fas fa-home"></i>
                    </NavLink>
                    <br/>
                    <NavLink to="/trending" exact className="active-left-nav">
                    <i class="fas fa-rocket"></i>
                    </NavLink>
                    <br/>
                    <NavLink to="/profil" exact className="active-left-nav">
                    <i class="fas fa-user"></i>
                    </NavLink>
                </div>

            </div>

        </div>
    )

    

}
 export default LeftNav