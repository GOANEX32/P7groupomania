import React from "react";
import { useSelector } from "react-redux";
import UploadImg from "./Upload.Img";
import { dateParser } from "../Utils";


const UpdateProfil = () => {
    const userData = useSelector((store) => store.userReducer);


    return (
        <div className="profil-container">

            <h1>Profil de {userData.pseudo} </h1>
            <br/>
            <h2>{userData.email}</h2>
            <br/>
            <h3>Membre depuis le : {dateParser(userData.createdAt)}</h3>
                    
        </div>
        
    )
}

export default UpdateProfil