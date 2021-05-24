import React from "react";
import { connect } from "react-redux";
import CommentItem from "./CommentItem";

const CommentList = (props) => (
    <div className="content-container">
        <div className="list-body">
            {
                props.comments.length === 0 ? (
                    <div>
                        <span className="list-item">No comments.</span>
                    </div>
                ) : (
                    props.comments.map((comment) => {
                        return <CommentItem key={comment.id} {...comment} />
                })
                )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList);
