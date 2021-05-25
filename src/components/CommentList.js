import React from "react";
import { connect } from "react-redux";
import CommentItem from "./CommentItem";

const CommentList = (props) => (
    <div className="content-container content-container--comment">
        <div className="list-body">
            {
                props.comments.length === 0 ? (
                    <div>
                        <span className="list-item">No comments.</span>
                    </div>
                ) : (
                    props.comments.map((commentData) => {
                        return <CommentItem 
                            key={commentData.commentId} 
                            content={commentData.content}
                            id={commentData.id}
                            date={commentData.date}
                            name={commentData.userName}
                            uid={commentData.uid} 
                        />
                })
                )
            }
        </div>
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        comments: state.comments.filter((comment) => comment.postId === props.id).sort((a, b) => {
            return a.date < b.date ? 1 : -1
        })
    }
}
export default connect(mapStateToProps)(CommentList);
