import React from "react";
import { connect } from "react-redux";
import { firebase } from "../firebase/firebase";
import { startRemoveComment } from "../actions/comments";

const CommentItem = (props) => {
    var user = firebase.auth().currentUser;
    var currentUid = user.uid;
    
    const onRemove = () => {
        props.startRemoveComment(props.id)
    }

    if (props.uid === currentUid) {
        return (
            <div className="comment-item-container">
                <p className="comment-content">{props.content}</p>
                <div className="comment-items">
                    <p>Submitted by {props.name} at {props.date}</p>
                </div>
                <div>
                    <button className="button button--delete" onClick={onRemove}>Delete Comment</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="comment-item-container">
                <p className="comment-content">{props.content}</p>
                <div className="comment-items">
                    <p>Submitted by {props.name} at {props.date}</p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveComment: (entryData) => dispatch(startRemoveComment(entryData))
})

export default connect(undefined, mapDispatchToProps)(CommentItem);