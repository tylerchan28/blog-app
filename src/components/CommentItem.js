import React from "react";
import { connect } from "react-redux";
import { removeComment } from "../actions/comments";

const CommentItem = (comment) => {
    const onRemove = () => {
        removeComment(comment.id)
        console.log("wokring")
    }
    
    return (
        <div>
            <p>{comment.content}</p>
            <p>{comment.date}</p>
            <p>{comment.name}</p>
            <button onClick={onRemove}>Remove</button>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        removeComment: (entryData) => dispatch(removeComment(entryData))
    }
}

export default connect(undefined, mapDispatchToProps)(CommentItem);