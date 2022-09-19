import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import axios from "axios"





const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
  
  const uid = localStorage.getItem('user');
  
  

  const like = () => {
    
    return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/post/like-post/`+post._id,
        data: {id : uid},
      }).catch((err) => console.log(err));
      
      
    
  };

  const unlike = () =>  {
    console.log("unlike",uid,post._id);
    
    return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/post/unlike-post/`+post._id,
        data: { id: uid },
      }).catch((err) => console.log(err));
    
  };

  useEffect(() => {
    if (post.likers.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, post.likers, liked]);

  return (
    <div className="like-container">
    
      {uid && liked === false && (
        <i class="fa-solid fa-heart" onClick={like} alt="like"/>
      )}
      {uid && liked && (
        <i class="fa-regular fa-heart"onClick={unlike} alt="unlike"></i>
        
      )}
      <span>{post.likers.length}</span>
    </div>
  );
};

export default LikeButton;