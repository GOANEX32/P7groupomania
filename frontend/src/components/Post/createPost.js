import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

    <form action="" encType="multipart/form-data" id="Post-form" >
      <input
        type="file"
        
        id="file"
        name="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setImage(e)}
        
      />

      <br />
      <label htmlFor="text"></label>
      <br />
      <input
        type="text"
        maxLength="88"
        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-100 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="text"
        name="text"
        id="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <input type="submit" className="create-submit bg-red-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3" onClick={requestPost} value="Cree le post" />
    </form>

  )
}

export default CreatePost;