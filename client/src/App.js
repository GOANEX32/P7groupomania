import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import Routers from "./components/Routes/index"

import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.action";

const App = () => {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('token');
  const uid = localStorage.getItem('user')
  const dispatch = useDispatch();
//recup l'id de user connecter dans le localstorage
//les envoiyer a reduce action qui trouve les info dans une requete back
//pour les stocker dans un state utilisable dans tous lapp
  const recup = async () => {
    if (uid) dispatch(getUser(uid))
  }
  recup();

  
    
  
    return (
      <UidContext.Provider value={token}>
        <Routers />
      </UidContext.Provider>
    )
  }
  
  export default App;


