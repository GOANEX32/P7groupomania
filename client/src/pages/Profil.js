import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import UpdateProfil from "../components/Profil/UpdateProfil";


const Profil = () => {
  const token = useContext(UidContext);
  console.log(token);

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
            <img src="./img/log.svg" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;