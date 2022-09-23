import Card from "../components/Post/Card";
import LeftNav from "../components/LeftNav";
import React, { useEffect, useState } from "react";
import CreatePost from "../components/Post/createPost.js";




const Home = ()=> {



 
  
  
  return(
    
    <div className="home">
      <LeftNav/>
      <CreatePost/>
      
      <Card/>
      
     

    </div>
    
    
  );
};

export default Home;