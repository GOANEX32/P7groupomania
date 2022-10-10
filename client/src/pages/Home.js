import Card from "../components/Post/Card";
import LeftNav from "../components/LeftNav";
import React, { useEffect, useState } from "react";
import CreatePost from "../components/Post/createPost.js";
import "../styles/All.css"




const Home = () => {

return (

    <div className="home bg-slate-900">
      <LeftNav />
      <CreatePost />
      <Card />



    </div>


  );
};

export default Home;