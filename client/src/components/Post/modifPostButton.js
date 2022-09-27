import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import axios from "axios"





const ModifPostButton = ({post}) =>{

    const updatePost = () => {
        
          return axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/post/${post._id}`,
            data: { },
          })
            
            
            .catch((err) => console.log(err));
        };
      

    return(
        <div>
        <div onSubmit={updatePost}>
            modifPost

        </div>
        </div>

    )
}

export default ModifPostButton