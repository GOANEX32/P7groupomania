import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";


const Log = (props) => {
    const [SignUpModal, setSignUpModal] = useState(props.signup);
    const [SignInModal, setSignInModal] = useState(props.signin);

    const handleModals = (e) => {
        if (e.target.id == 'register') {
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id == "login") {
            setSignUpModal(false);
            setSignInModal(true);
        }
    }

    return (
        <div className="connection-form">
            <div className="form-container">
                <ul>
                    <li onClick={handleModals} id="register" className={SignUpModal ? "active-btn" : null} class="group relative flex w-full justify-center rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">inscription</li>
                    <li onClick={handleModals} id="login" className={SignUpModal ? "active-btn" : null} class="group relative flex w-full justify-center rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">connection</li>
                </ul>
                {SignUpModal && <SignUpForm />}
                {SignInModal && <SignInForm />}
            </div>
        </div>
    )
}

export default Log;