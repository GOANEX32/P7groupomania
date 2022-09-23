import React, { useState } from "react";
import axios from "axios";
import { text } from "body-parser";



const CreatePost = () => {

  const [img, setImg] = useState("");
  const [text, setText] = useState("");
  const uid = localStorage.getItem('user');


  const requestPost = async (e) => {

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/post`,
      
        posterId : uid,
        message: text,
        file: img,
      



    })
      .catch((err) => {
        console.log(err);
      });


  }

  return (

    <form action="" onSubmit={requestPost} id="sign-up-form">
      <label htmlFor="file">Changer d'image</label>
      <input
        type="file"
        id="file"
        name="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setImg(e.target.value)}
        value={img}

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
      <input type="submit" value="publier" />
    </form>

  )
}

export default CreatePost;