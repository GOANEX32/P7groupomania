import React, { useEffect, useState } from "react";
import LikeButton from "./LikeButton";
import ModifPost from "./modifPostButton";
import Corbeille from "./deletePost";
import { useSelector } from "react-redux";
import '../../styles/Card.css';
import axios from "axios";

const Card = () => {
  const postData = useSelector((state) => state.postReducer);
  const userData = useSelector((state) => state.userReducer);
  const token = localStorage.getItem("token");
  const [post, setPost] = useState([]);
  console.log(postData);

  useEffect(() => {
    const listPosts = () => {
      axios.get(`${process.env.REACT_APP_API_URL}api/post/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
          }
        }).then(res => {

          setPost(res.data)
          console.log(post)
        })
        .catch((err) => {
          console.log(err)
        })
      }

    listPosts()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold underline">List Post</h1>
      <section>
        <>
          {
          post.map((post, index) => (
              <div className="post" key={post._id}>
                {console.log(post.likers)}

                <div className="post-contenu">
                  <img src={post.picture} className="img" alt="images"></img>
                </div>
                <div className="post-action">
                  <LikeButton post={post} />
                  <ModifPost post={post} userData={userData} />
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