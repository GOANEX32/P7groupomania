import React from "react";

const Logout = () => {
    const logout = async () => {
        localStorage.clear();
        window.location = "/";
    }
    return (
        <li onClick={logout}>
            <i class="fas fa-sign-out-alt"></i>

        </li>
        )
}
export default Logout