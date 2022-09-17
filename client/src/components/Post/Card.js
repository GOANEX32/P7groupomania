import { json } from "body-parser";
import React, { useEffect, useState } from "react";
import LikeButton from "./LikeButton";

import axios from "axios"


const Card = ()=> {
  const [posts,setPosts] = useState([]);
  const token = localStorage.getItem("token");
 const listPosts = () => {
  axios.get(`${process.env.REACT_APP_API_URL}api/post/`,
  {
    headers:{
      Authorization:`Bearer ${token}`,
      "Content-Type":'application/json'
    }
  }).then (res => {
    
    setPosts(res.data)
    console.log(res.data)

  }).catch((err) => {
    console.log(err)
  } )
}
  useEffect(() => {
    {listPosts()}
  },[])



 
  
  
  return(
    
    <div>
      <h1>Home page</h1>
      <section>
        <h2>List Post</h2>
        {
          posts.map((post,index) =>
           
        
        <div className="post">
          <div className="post-profil">

          </div>
          <div className="post-contenu">
            <p>{post.message}</p>
            <img ></img>
            
            {post.comments.map((comments,index) =>
            <div>
            <p className="comment-psuedo">{comments.commenterPseudo}</p>
            <p className="comment">{comments.text}</p>
            </div>
            

            )}

            

            

          </div>
          <div className="post-action">
            <LikeButton post={post}/>
            
            <button id="bouton-suprimer"></button>
            <button id="bouton-modif"></button>
            
          </div>


        </div>
        )}
      </section>

    </div>
    
  );
};

export default Card;