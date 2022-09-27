import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import axios from "axios"



const Corbeille = ({ post }) => {

  const supprimerAction = async () => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/post/${post._id}`,
    })
      .catch((err) => console.log(err));

  }
  return (
    <div className="delete-container">
      <i class="fas fa-trash-alt" onClick={supprimerAction} />
    </div>

  )
}
export default Corbeille