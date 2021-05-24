import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { firebase } from "../firebase/firebase";

const CommentSection = () => { 
    var user = firebase.auth().currentUser;
    var name = user.displayName;
    
    return (
        <div>
            <CommentForm name={name}/>
            <CommentList />
        </div>
    )
}

export default CommentSection;