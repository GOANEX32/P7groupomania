import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../actions/post.actions";
import { isEmpty } from "../Utils";
import '../../styles/Card.css';





const ModifPost = ({post}) =>{
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.usersReducer);

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  };
   

    
      

    return(
        <div>
                   
       
            
              <div className="button-container">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <img src="./img/icons/edit.svg" alt="edit" />
                </div>
                </div>
            
        </div>

    )
}

export default ModifPost