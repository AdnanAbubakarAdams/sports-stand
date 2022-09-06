import React, { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({ comments1, handleDelete, handleSubmit }) => {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  }
  return (
    <div className='comment'>
      <button onClick={toggleView}>Edit</button>
      { viewEditForm ? (
        <CommentForm
        handleSubmit={handleSubmit}
        commentsDetails={comments1}
        toggleView={toggleView}>

        </CommentForm>
      ) : (
        <div>
          <h4>
            {comments1.rating}
          </h4>
          <h5>{comments1.commenter}</h5>
          <p>{comments1.comment}</p>
          <button onClick={() => handleDelete(comments1.id)}>Delete</button>
        </div>
      )}

    </div>
  )
}

export default Comment;