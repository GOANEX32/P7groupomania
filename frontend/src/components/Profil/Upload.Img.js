import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.action";

const UploadImg = () => {
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.userReducer);
  const id = userData._id;

  const setImage = (e) => {
    console.log(e.target)
    setImg(e.target.files[0]);
  }

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.pseudo);
    data.append("userId", userData._id);
    data.append("file", img);
    

    dispatch(uploadPicture(data,id));
  };

  return (
    <form action="" onSubmit={handlePicture} className="upload-pic">
      <label htmlFor="file">Changer d'image</label>
      <input
        type="file"
        id="file"
        name="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setImage(e)}
      />
      <br/>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default UploadImg;