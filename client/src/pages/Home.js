import Card from "../components/Post/Card";
import LeftNav from "../components/LeftNav";
import CreatePost from "../components/Post/createPost.js";
import "../styles/All.css"
import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import groupomania from "../styles/image/icon-left-font.png"


const Home = () => {
  const token = useContext(UidContext);

  return (

    <div className="home bg-slate-900">
      {token ? (
        <div>
          <LeftNav />
          <CreatePost />
          <Card />
        </div>

      ) : (
        <img className="gri" src={groupomania} />
      )}
    </div>
  );
};

export default Home;