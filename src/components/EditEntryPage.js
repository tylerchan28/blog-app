import React from "react";
import { connect } from "react-redux";
import { editEntry, removeEntry } from "../actions/entries";
import EntryForm from "./EntryForm";
const EditEntryPage = (props) => {
    const onSubmit = (entry) => {
        props.editEntry(props.entry.id, entry)
        props.history.push("/dashboard")
    }
    const onRemove = () => {
        props.removeEntry(props.entry.id)
        props.history.push("/dashboard")
    }

    return (
        <div>
            <div>
                <h1>Edit Post</h1>
            </div>
            <div className="content-container">
                <EntryForm 
                    entry={props.entry}
                    onSubmit={onSubmit}    
                />
            </div>
            <button onClick={onRemove}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        entry: state.entries.find((entry) => entry.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => ({
    editEntry: (id, entry) => dispatch(editEntry(id, entry)),
    removeEntry: (entryData) => dispatch(removeEntry(entryData))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditEntryPage);