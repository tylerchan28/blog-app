import React from "react";
import { connect } from "react-redux";
import EntryForm from "./EntryForm";
import { addEntry } from "../actions/entries";

const AddEntryPage = (props) => {
    const onSubmit = (entry) => {
        props.addEntry(entry)
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
    addEntry: (entry) => dispatch(addEntry(entry))
})


export default connect(undefined, mapDispatchToProps)(AddEntryPage);