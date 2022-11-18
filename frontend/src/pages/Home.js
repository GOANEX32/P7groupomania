import Card from "../components/Post/Card";
import CreatePost from "../components/Post/createPost.js";
import "../styles/All.css"
import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import groupomania from "../styles/image/icon-left-font.png";


const Home = () => {
  const token = useContext(UidContext);

  return (

    <div className="home ">
      {token ? (
        <>
        <img className="gri" src={groupomania} />
          <CreatePost />
          <Card />
        </>
        

      ) : (
        <img className="gri" src={groupomania} />
      )}
    </div>
  );
};

export default Home;