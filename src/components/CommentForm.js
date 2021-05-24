import React, { useState } from "react";
import { connect } from "react-redux";
import { startAddComment } from "../actions/comments";
import moment from "moment";
import uuid from "uuid";

const CommentForm = (props) => {
    const [comment, setComment] = useState("");
    
    const onCommentChange = (e) => {
        const comment = e.target.value;
        setComment(comment)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const dateCreated = moment().format("l, h:mm a");
        const submittedComment = {
            content: comment,
            date: dateCreated,
            name: props.name,
            id: uuid()
        }
        props.startAddComment(submittedComment)
        setComment("");
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Add a comment"
                    onChange={onCommentChange}
                    value={comment}
                    required
                />
                <button>Add comment</button>
            </form>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    startAddComment: (comment) => dispatch(startAddComment(comment))
})

export default connect(undefined, mapDispatchToProps)(CommentForm);