import React from "react";
import { connect } from "react-redux";
import { startEditEntry, startRemoveEntry } from "../actions/entries";
import EntryForm from "./EntryForm";

const EditEntryPage = (props) => {
    const onSubmit = ({ title, description }) => {
        props.startEditEntry(props.entry.id, { title, description })
        props.history.push("/dashboard")
    }
    const onRemove = () => {
        props.startRemoveEntry(props.entry.id)
        props.history.push("/dashboard")
    }
    return (
        <div>
            <div className="page-header">
                <div className="content-container">  
                    <h1>Edit Post</h1>
                </div>  
            </div>
            <div className="content-container">
                {`Readable at localhost:8080/read/${props.entry.id}`}
                <EntryForm 
                    entry={props.entry}
                    onSubmit={onSubmit}  
                />
                <button className="button button--secondary" onClick={onRemove}>Remove Post</button>
            </div>
        </div>
    )   
}

const mapStateToProps = (state, props) => {
    return {
        entry: state.entries.find((entry) => entry.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => ({
    startEditEntry: (id, entry) => dispatch(startEditEntry(id, entry)),
    startRemoveEntry: (entryData) => dispatch(startRemoveEntry(entryData))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditEntryPage);