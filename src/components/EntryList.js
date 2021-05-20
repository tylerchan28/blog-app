import React from "react";
import EntryListItem from "./EntryListItem";
import { connect } from "react-redux";
import selectEntries from "../selectors/entries";

const EntryList = (props) => (
    <div className="content-container">
        <div className="list-body">
            {
                props.entries.length === 0 ? (
                    <div>
                        <span className="list-item">No posts.</span>
                    </div>
                ) : (
                    props.entries.map((entry) => {
                        return <EntryListItem key={entry.id} {...entry}/>
                })
                )
            }
        </div>
    </div>
        )


const mapStateToProps = (state) => {
    return {
        entries: selectEntries(state.entries, state.filters)
    }
}

export default connect(mapStateToProps)(EntryList);


