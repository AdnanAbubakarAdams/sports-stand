import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentForm from './CommentForm';
import Comment from './Comment';



const Comments = (props) => {
  const API = process.env.REACT_APP_API_URL;

  const [commentss, setCommentss] = useState([]);

  let { id } = useParams();
  
  // ADD COMMENTS 
  const handleAdd = (newComment) => {
    axios.post(`${API}/players/${id}/comments`, newComment)
    .then((response) => {
      setCommentss([response.data, ...commentss])
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
      const copyCommentArr = [...commentss];
      const indexDeleteComment = copyCommentArr.findIndex((comment) => {
        return comment.id === id;
      });
      copyCommentArr.splice(indexDeleteComment, 1);
      setCommentss(copyCommentArr);
    },
    (error) => console.log(error)
    )
    .catch((error) => console.log(error))
  };

  // EDIT COMMENT
  const handleEdit = (updateComment) => {
    axios.put(`${API}/players/${id}/comments/${updateComment.id}`, updateComment)
    .then((response) => {
      const copyCommentArr = [...commentss];
      const indexUpdateComment = copyCommentArr.findIndex((comment) => {
        return comment.id === updateComment.id;
      });
      copyCommentArr[indexUpdateComment] = response.data;
      setCommentss(copyCommentArr)
    })
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios.get(`${API}/players/${id}/comments`)
    .then((response) => {
      console.log(response.data);
      setCommentss(response.data);
    });
  }, [id, API]);
  return (
    <section className='comments'>
      <CommentForm handleSubmit={handleAdd}>
        <h4>Drop A comment</h4>
      </CommentForm>
      {commentss.map((comments) => {
        <Comment key={comments.id}
        comments={comments}
        handleDelete={handleDelete}
        handleSubmit={handleEdit}
        />
      })}

    </section>
  )
}

export default Comments;