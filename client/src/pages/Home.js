import Card from "../components/Post/Card";
import LeftNav from "../components/LeftNav";
import React, { useEffect, useState } from "react";
import createPost from "../components/Post/createPost";




const Home = ()=> {



 
  
  
  return(
    
    <div>
      <LeftNav/>
      <createPost/>
      <Card/>
      
     

    </div>
    
  );
};

export default Home;