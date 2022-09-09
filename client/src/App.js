import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import Routers from "./components/Routes/index"
import axios from "axios";

const App = () => {
    const [uid,setUid] = useState(null);

    useEffect(() => {
       const fetchToken = async () => { 
        await axios({
            method:"get",
            url:`${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials:true

        })
        .then((res) => {
            setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();
    }, [uid]);


    return (
        
        
        <Routers/>
        

        
    )
}

export default App;


