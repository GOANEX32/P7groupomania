import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import axios from "axios"



const deletePost = ({post}) => {
    const deleteAction = () => {
        return axios({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}api/post/${post._id}`,
          })
          .catch((err) => console.log(err));

    }
    return(
        <div>
      <i onClick={deleteAction} class="fas fa-trash-alt"></i>
    </div>

    )
}
export default deletePost