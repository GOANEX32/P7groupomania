import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";
import "../styles/Profil.css"


const Profil = () => {
  const token = useContext(UidContext);

  return (
    <div className="profil-page">
      {token ? (
        <div>
        <UpdateProfil/>
        </div>
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;