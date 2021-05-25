import React from "react";
import { firebase } from "../firebase/firebase"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CommentSection from "./CommentSection";

const ReadPage = (props) => {
    var user = firebase.auth().currentUser;
    var currentUid = user.uid;

    if (props.entry.uid === currentUid) {
        return (
            <div className="read-container">
                <div className="read-header">
                    <div>
                        <span className="read-title">{props.entry.title}</span>
                        <Link className="button-edit" to={`/edit/${props.entry.id}`}>Edit</Link>
                    </div>
                    <span className="read-header__item">submitted by {props.entry.name} at {props.entry.date}</span>
                </div>
                <div className="read-description">
                    {props.entry.description}
                </div>
                <CommentSection id={props.entry.id}/>
            </div>
        )
    } else {
        return (
            <div className="read-container">
                <div className="read-header">
                    <div>
                        <span className="read-title">{props.entry.title}</span>
                    </div>
                    <span className="read-header__item">submitted by {props.entry.name} at {props.entry.date}</span>
                </div>
                <div className="read-description">
                    {props.entry.description}
                </div>
                <CommentSection id={props.entry.id}/>
            </div>
        )
    }
}




const mapStateToProps = (state, props) => {
    return {
        entry: state.entries.find((entry) => entry.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ReadPage);


