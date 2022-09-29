import React, { useState } from "react";
import axios from "axios";
import { text } from "body-parser";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../../actions/post.actions";



const CreatePost = () => {

  const [img, setImg] = useState("");
  const [text, setText] = useState("");
  const uid = localStorage.getItem('user');
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const setImage = (e) => {
    console.log(e.target)
    setImg(e.target.files[0]);
  }

  const requestPost = async (e) => {
    e.preventDefault();
    console.log({uid, text, img})

    const data = new FormData();
    data.append("posterId", uid);
    data.append("message", text);
    if(img !== "") data.append("file", img)

    dispatch(addPost(data));
    dispatch(getPosts());

    await axios.post(`${process.env.REACT_APP_API_URL}api/post`, 
      data, 
      {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        },
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (

    <form action="" enctype="multipart/form-data" id="sign-up-form">
      <label htmlFor="file">Changer d'image</label>
      <input
        type="file"
        id="file"
        name="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setImage(e)}
      />

      <br />
      <label htmlFor="text">text</label>
      <br />
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <input type="submit" onClick={requestPost} value="publier" />
    </form>

  )
}

export default CreatePost;