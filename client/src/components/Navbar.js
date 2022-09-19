import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";
import '../styles/Navbar.css';



const Navbar = () => {
    const token = useContext(UidContext);
    //recup donnés dans user reducer 
    const userData = useSelector((store) => store.userReducer);
    return (
        <nav>
            <div className="nav-container">
                <div className="log">
                    <NavLink  exact to="/">
                        
                        <i className="fas fa-globe"></i>
                        <h3>Groupomania </h3>
                        
                        
                    </NavLink>
                </div>

                {token ? (
                    <ul>
                        
                        <li className="welcom">
                            <NavLink   exact to="/profil">
                                <h5>Bienvenu {userData.pseudo} </h5>
                            </NavLink>

                        </li>
                        <Logout/>

                    </ul>
                ) : (
                    <ul>
                        
                        <li>
                            <NavLink className="nav-item" exact to="/profil">
                                <i class="fas fa-user-alt-slash"></i>
                            </NavLink>
                        </li>
                    </ul>
                )


                }
            </div>
        </nav>
    )
}

export default Navbar