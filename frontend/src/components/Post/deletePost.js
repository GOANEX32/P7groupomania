import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";
import '../../styles/post_action.css';



const Corbeille = ({ post,userData }) => {

  const dispatch = useDispatch();

  const deleteQuote = () => dispatch(deletePost(post._id));
  
  return (
    
    
    <div className="delete-container  icon-div">
      {(userData._id === post.posterId || userData.isAdmin === true )&& (
      <i className="fas fa-trash-alt" onClick={deleteQuote} />
      )}
    </div>
    

  )
  
}
export default Corbeille;