import React, { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({ comments, handleDelete, handleSubmit }) => {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  }
  return (
    <div className='comments'>
      <button onClick={toggleView}>Edit</button>
      { viewEditForm ? (
        <CommentForm
        handleSubmit={handleSubmit}
        commentsDetails={comments}
        toggleView={toggleView}>

        </CommentForm>
      ) : (
        <div>
          <h4>
            {comments.rating}
          </h4>
          <h5>{comments.commenter}</h5>
          <p>{comments.comment}</p>
          <button onClick={() => handleDelete(comments.id)}>Delete</button>
        </div>
      )}

    </div>
  )
}

export default Comment;