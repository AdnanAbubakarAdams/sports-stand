import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const CommentForm = ( props ) => {
    let { id } = useParams();
    const { commentsDetails } = props;

    const [comments, setComments] = useState({
        commenter: "",
        comment: "",
        rating: "",
        player_id: id,
    });

    const handleChange = (e) => {
      setComments({ ...comments, [e.target.id]: e.target.value })
    };

    useEffect(() => {
      if (commentsDetails) {
        setComments(commentsDetails);
      }
    }, [id, commentsDetails, props]);

    const handleSubmit = (e) => {
      e.preventDefault();
      props.handleSubmit(comments, id);
      if (commentsDetails) {
        props.toggleView();
      }
      setComments({
        commenter: "",
        comment: "",
        rating: "",
        player_id: id,
      });
    };


  return (
   <div className="Edit">
      {/* this is our placeholder for our sandwiched text from parent */}
      { props.children }

      <form onSubmit={handleSubmit}>
        <label htmlFor="commenter">Name:</label>
        <br/>
        <input
          id="commenter"
          value={comments.commenter}
          type="text"
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <br/>
        <label htmlFor="rating">Rating:</label>
        <br/>
        <input
          id="rating"
          type="number"
          name="rating"
          min="0"
          max="10"
          step="1"
          value={comments.rating}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor="comment">Comments:</label>
        <br/>
        <textarea
          id="comment"
          type="text"
          name="comment"
          value={comments.comment}
          placeholder="Comments go Here..."
          onChange={handleChange}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  )
}

export default CommentForm;