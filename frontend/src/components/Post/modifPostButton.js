import React, {  useState, useEffect } from "react";


import { useDispatch, } from "react-redux";
import { updatePost } from "../../actions/post.actions";








const ModifPost = ({ post, userData }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const dispatch = useDispatch();


  const updateItem = () => {
    
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  }

  return (
    <div>

      {isUpdated && (

        <div className="update-post">
          <textarea
            maxLength="88"
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
      {(userData._id === post.posterId || userData.isAdmin === true ) && (
        <div className="button-container ">
          <div onClick={() => setIsUpdated(!isUpdated)}>
            <i className="fa-solid fa-pen-to-square  icon-div"></i>
          </div>
          {isUpdated === false && <p className="text-post">{post.message}</p>}
        </div>
      )}

    </div>

  )
}

export default ModifPost