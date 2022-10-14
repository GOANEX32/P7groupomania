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
            {token ? (
                <div className="welcom mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between bg-red-400">
                    <NavLink to="/"  className="active-nav">
                    <i class="fas fa-home fa-lg" ></i>
                    </NavLink>
                    <NavLink to="/profil" className="active-nav bg-neutral-50 text-white px-3 py-2 rounded-md text-sm font-medium">
                        <h5>Bienvenu {userData.pseudo} </h5>
                    </NavLink>
                    <Logout />
                </div>
            ) : (
                <div className="connection-home">
                    <NavLink className="nav-item" to="/profil">
                        <h2>connection</h2>
                    </NavLink>
                    <NavLink className="nav-item" to="/">
                        <h2>Accueil</h2>
                    </NavLink>
                    </div>
            )}
            </nav>
    )
}

export default Navbar