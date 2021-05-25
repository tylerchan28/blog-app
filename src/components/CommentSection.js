import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { firebase } from "../firebase/firebase";

const CommentSection = (props) => { 
    var user = firebase.auth().currentUser;
    var name = user.displayName;
    var uid = user.uid;
    return (
        <div className="comment-container">
            <CommentForm name={name} id={props.id} uid={uid}/>
            <CommentList id={props.id}/>
        </div>
    )
}

export default CommentSection;