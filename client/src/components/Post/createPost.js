import React, { useState } from "react";
import axios from "axios";
import { text } from "body-parser";


const createPost = () => {
    
    const [img, setImg] = useState("");
    const [text, setText] = useState("");
    

    const requestPost = async (e) => {
        await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/post`,
            data: {
              img,
              text:text,
             
            }})
        

    }

    return (
        <>
        <form action="" onSubmit={requestPost} id="sign-up-form">
          <label htmlFor="img">image</label>
          <br />
          <input
            type="img"
            name="img"
            id="img"
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
          
          </form>
          </>
    )
}

export default createPost