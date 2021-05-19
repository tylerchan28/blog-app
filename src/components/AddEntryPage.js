import React from "react";
import { connect } from "react-redux";
import EntryForm from "./EntryForm";
import { addEntry } from "../actions/entries";

const AddEntryPage = (props) => {
    const onSubmit = (entry) => {
        props.addEntry(entry)
        props.history.push("/dashboard")
    }
    return (
        <EntryForm onSubmit={onSubmit}/>
    )
}

const mapDispatchToProps = (dispatch) =>({
    addEntry: (entry) => dispatch(addEntry(entry))
})


export default connect(undefined, mapDispatchToProps)(AddEntryPage);