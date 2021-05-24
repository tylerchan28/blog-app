import React from "react";

const CommentItem = (comment) => {
    return (
        <div>
            <p>{comment.content}</p>
            <p>{comment.date}</p>
            <p>{comment.name}</p>
        </div>
    )
}

export default CommentItem;