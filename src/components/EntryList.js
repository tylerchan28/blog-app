import React from "react";
import EntryListItem from "./EntryListItem";
import { connect } from "react-redux";

const EntryList = (props) => {
    return (
        <div>
            <p>Entry list:</p>
            {props.entries.map((entry) => {
                return <EntryListItem key={entry.id} {...entry}/>
            })}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        entries: state.entries
    }
}

export default connect(mapStateToProps)(EntryList);