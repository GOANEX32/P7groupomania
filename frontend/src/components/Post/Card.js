import { json } from "body-parser";
import React, { useEffect, useState } from "react";
import axios from "axios"
import LikeButton from "./LikeButton";
import ModifPost from "./modifPostButton";
import Corbeille from "./deletePost";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils";
import '../../styles/Card.css';


const Card = () => {
  const [posts, setPosts] = useState([]);

  const token = localStorage.getItem("token");
  const postData = useSelector((store) => store.postReducer);
  const userData = useSelector((state) => state.userReducer);



  const listPosts = () => {
    axios.get(`${process.env.REACT_APP_API_URL}api/post/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'application/json'
        }
      }).then(res => {

        setPosts(res.data)
        console.log(res.data)

      }).catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    { listPosts() }
  }, [])


  return (

    <div>
      <h1 className="text-3xl font-bold underline">List Post</h1>
      <section>

        {
          !isEmpty(postData[0]) &&
          postData.map((post, index) =>


            <div className="post">
              <div className="post-profil">
                <div className="pseudo">
                  
                    {!isEmpty(userData[0]) &&
                      userData
                        .map((user) => {
                          if (user._id === post.posterId) return user.pseudo;
                          else return null;
                        })
                        .join("")}
                   <h3>
                  
                        
                  </h3>
                </div>

              </div>
              <div className="post-contenu">
                <p>{post.message}</p>
                <img src={post.picture} className="img"></img>
                </div>
              <div className="post-action">
                <LikeButton post={post} />
                <ModifPost post={post} />
                <Corbeille post={post} />
              </div>
            </div>
          )}
      </section>
    </div>

  );
};

export default Card;