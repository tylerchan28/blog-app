import React from "react";
import EntryListItem from "./EntryListItem";
import { connect } from "react-redux";

const EntryList = (props) => {
    return (
        <div>
            <p>Entry list:</p>
            <EntryListItem />
        </div>
    )
}



export default EntryList;