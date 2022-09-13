import React from "react";
import LeftNav from "../LeftNav";
import {useSelector} from "react-redux";
import UploadImg from "./Upload.Img";


const UpdateProfil = () => {
    const userData = useSelector((store) => store.userReducer);

    return (
    <div className="profil-container">
       <LeftNav/>
       <h1>Profil de {userData.pseudo} </h1>
       <div className="update-container">
        <div className="left-part">
            <h3>Photo de profil</h3>
            <img src={userData.picture} alt="user-picture"/>
            <UploadImg/>
        </div>

       </div>
    </div>
    )
}

export default UpdateProfil