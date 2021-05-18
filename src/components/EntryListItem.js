import React from "react";

const EntryListItem = ({ entry, deleteEntry }) => {
    return (
        <div>
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
            <p>{entry.date}</p>
            <button onClick={() => deleteEntry(entry)}>Delete</button>
        </div>
    )
}

export default EntryListItem;