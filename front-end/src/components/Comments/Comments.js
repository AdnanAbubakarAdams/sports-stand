import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentForm from './CommentForm';
import Comment from './Comment';
import  "./Comments.css"



const Comments = (props) => {
  const API = process.env.REACT_APP_API_URL;

  const [comments, setComments] = useState([]);

  let { id } = useParams();
  
  // ADD COMMENTS 
  const handleAdd = (newComment) => {
    axios.post(`${API}/players/${id}/comments`, newComment)
    .then((response) => {
      setComments([response.data, ...comments])
    },
    (error) => console.error(error)
    )
    .catch((error) => {
      console.log(error);
    });
  };

  // DELETE COMMENT
  const handleDelete = (commentId) => {
    axios.delete(`${API}/players/${id}/comments/${commentId}`)
    .then((response) => {
      const copyCommentArr = [...comments];
      const indexDeletedComment = copyCommentArr.findIndex((comment) => {
        return comment.id === id;
      });
      copyCommentArr.splice(indexDeletedComment, 1);
      setComments(copyCommentArr);
    },
    (error) => console.log(error)
    )
    .catch((error) => console.log(error))
  };

  // EDIT COMMENT
  const handleEdit = (updateComment) => {
    axios.put(`${API}/players/${id}/comments/${updateComment.id}`, updateComment)
    .then((response) => {
      const copyCommentArr = [...comments];
      const indexUpdatedComment = copyCommentArr.findIndex((comment) => {
        return comment.id === updateComment.id;
      });
      copyCommentArr[indexUpdatedComment] = response.data;
      setComments(copyCommentArr)
    })
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios.get(`${API}/players/${id}/comments`)
    .then((response) => {
      // console.log(response.data);
      setComments(response.data);
    });
  }, [id, API]);
  return (
    <section className='comments'>
      <CommentForm handleSubmit={handleAdd}>
        <h4>Drop A comment</h4>
      </CommentForm>
      {comments.map((comments1) => {
        return <Comment key={comments1.id}
        comments1={comments1}
        handleDelete={handleDelete}
        handleSubmit={handleEdit}
        />
      })}

    </section>
  )
}

export default Comments;