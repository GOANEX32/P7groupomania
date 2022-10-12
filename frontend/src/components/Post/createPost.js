import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../../actions/post.actions";
import '../../styles/createPost.css';



const CreatePost = () => {

  const [img, setImg] = useState("");
  const [text, setText] = useState("");
  const uid = localStorage.getItem('user');
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

    
  }

  return (

    <form action="" enctype="multipart/form-data" id="sign-up-form">
      <label htmlFor="file" class="label-file">Changer d'image</label>
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
      <input type="submit" className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3" onClick={requestPost} value="publier" />
    </form>

  )
}

export default CreatePost;