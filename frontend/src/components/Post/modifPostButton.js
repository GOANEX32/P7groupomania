import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";

import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../actions/post.actions";
import { isEmpty } from "../Utils";







const ModifPost = ({ post, userData }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const dispatch = useDispatch();


  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  };

  return (
    <div>

      {isUpdated && (

        <div className="update-post">
          <textarea
            maxlength="88"
            defaultValue={post.message}
            onChange={(e) => setTextUpdate(e.target.value)}
          />
          <div className="button-container">
            <button className="btn" onClick={updateItem}>
              Valider modification
            </button>
          </div>
        </div>

      )}
      {userData._id === post.posterId && (
        <div className="button-container ">
          <div onClick={() => setIsUpdated(!isUpdated)}>
            <i class="fa-solid fa-pen-to-square  icon-div"></i>
          </div>
          {isUpdated === false && <p className="text-post">{post.message}</p>}
        </div>
      )}

    </div>

  )
}

export default ModifPost