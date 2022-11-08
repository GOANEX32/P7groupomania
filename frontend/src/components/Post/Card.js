import React, { useContext, useEffect, useState } from "react";
import LikeButton from "./LikeButton";
import ModifPost from "./modifPostButton";
import Corbeille from "./deletePost";
import {  useSelector } from "react-redux";
import { isEmpty } from "../Utils";
import '../../styles/Card.css';
import postReducer from "../../reducers/post.reducer";
import axios from "axios";

const Card = () => {
  
  const postData = useSelector((state) => state.postReducer);
  const userData = useSelector((state) => state.userReducer);
  

 

    return (
    <div>
      <h1 className="text-3xl font-bold underline">List Post</h1>
      <section>
      <>
      {
          !isEmpty(postData[0]) &&
          postData.map((post,index) =>(
           <div className="post" key={post._id}>
              
              <div className="post-contenu">
                <img src={post.picture} className="img" alt="images"></img>
              </div>
              <div className="post-action">
                <LikeButton post={post}/>
                <ModifPost post={post} userData={userData}/>
                <Corbeille post={post} userData={userData} />
                
              </div>
            </div>
          )
          )}
      </>
        </section>
      
    </div>

  );
};

export default Card;