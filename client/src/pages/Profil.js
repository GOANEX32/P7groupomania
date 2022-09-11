import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";


const Profil = () => {
  const token = useContext(UidContext);
  console.log(token);

  return (
    <div className="profil-page">
      {token ? (
        <h1>Update Profile</h1>
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