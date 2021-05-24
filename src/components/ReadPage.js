import React from "react";
import { connect } from "react-redux";

const ReadPage = (props) => {
    return (
        <div className="content-container">
            <div className="read-header">
                <div>
                    <span className="read-title">{props.entry.title}</span> <span className="read-name">by {props.entry.name}</span>
                </div>
                {props.entry.date}
            </div>
            <div className="read-description    ">
                {props.entry.description}
            </div>
        </div>
    )
}




const mapStateToProps = (state, props) => {
    return {
        entry: state.entries.find((entry) => entry.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ReadPage);


