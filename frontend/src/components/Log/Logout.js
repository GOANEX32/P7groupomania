import React from "react";

const Logout = () => {
    const logout = async () => {
        localStorage.clear();
        window.location = "/";
    }
    return (
        <div onClick={logout}>
            <i className="fas fa-sign-out-alt"></i>

        </div>
        )
}
export default Logout