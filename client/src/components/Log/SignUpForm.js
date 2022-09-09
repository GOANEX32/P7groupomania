import React, { useState } from "react";
import axios from "axios";




const SigneUpForm = () => {
    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [controlPassword, setControlPassword] = useState ('')

    const handRegister = async (e) => {
        e.preventDefault();
        const terms = document.getElementById('terms');
        const pseudoError = document.querySelector('.pseudo.error');
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
        const passwordConfirmError = document.querySelector('.password-confirm.error');
        const termsError = document.querySelector('.terms.error');

        if (password != controlPassword || !terms.checked ) {
            if (password != controlPassword)
            passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";

            if (!terms.checked)
            termsError.innerHTML = "Veuillez valider les conditions générales";
        }

        }
    return (
        <form action="" onSubmit={handRegister} id="sign-up-form">
            
            <label htmlFor="pseudo">pseudo</label>
            <br/>
            <input 
            type="text" 
            name="pseudo" 
            id="pseudo" 
            onChange={(e) => setPseudo(e.target.value)}
            value={pseudo}
            />
            <div className="pseudo error"></div>
            
            
            <br/>

            <label htmlFor="email">Email</label>
            <br/>
            <input 
            type="text" 
            name="email" 
            id="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            <div className="email error"></div>
            

            <br/>

            <label htmlFor="password">password</label>
            <br/>
            <input 
            type="password" 
            name="password" 
            id="password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
            <div className="password error"></div>

            <br/>

            <label htmlFor="password-conf">Confirmer mot de passe</label>
            <br/>
            <input 
            type="password" 
            name="password" 
            id="password-conf" 
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
            />
            <div className="password-confirm error"></div>

            <br/>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
            J'accepte les{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              conditions générales
            </a>
            </label>
            <div className="terms error"></div>
            <br />

            <input type="submit" value="Valider inscription" />




        </form>
    )
}


export default SigneUpForm