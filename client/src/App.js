import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import Routers from "./components/Routes/index"
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('token');
  console.log(token);
    //const dispatch = useDispatch();
  
    
  
    return (
      <UidContext.Provider value={token}>
        <Routers />
      </UidContext.Provider>
    )
  }
  
  export default App;


