import { json } from "body-parser";
import React, { useEffect, useState } from "react";
import SignInForm from "../components/Log/SignInForm";
import axios from "axios";


const Home = ()=> {
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
            <img sr></img>
            <p>{post.message}</p>

          </div>
          <div className="post-action">
            <button id="button-like"></button>
            <button id="bouton-suprimer"></button>
            <button id="bouton-modif"></button>
            
          </div>


        </div>
        )}
      </section>

    </div>
    
  );
};

export default Home;