import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";
import '../../styles/post_action.css';



const Corbeille = ({ post }) => {

  const dispatch = useDispatch();

  const deleteQuote = () => dispatch(deletePost(post._id));
  return (
    <div className="delete-container">
      <i class="fas fa-trash-alt" onClick={deleteQuote} />

    </div>

  )
}
export default Corbeille;