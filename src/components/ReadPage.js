import React from "react";
import { connect } from "react-redux";
import CommentSection from "./CommentSection";

const ReadPage = (props) => {
    
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




const mapStateToProps = (state, props) => {
    return {
        entry: state.entries.find((entry) => entry.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ReadPage);


