import React from "react";
import { connect } from "react-redux";
import EntryForm from "./EntryForm";
import { startAddEntry } from "../actions/entries";

const AddEntryPage = (props) => {
    const onSubmit = (entry) => {
        props.startAddEntry(entry)
        props.history.push("/dashboard")
        console.log(entry)
    }
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1>Create a Post</h1>
                </div>
            </div>
            <div className="content-container">
                <EntryForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    startAddEntry: (entry) => dispatch(startAddEntry(entry))
})


export default connect(undefined, mapDispatchToProps)(AddEntryPage);