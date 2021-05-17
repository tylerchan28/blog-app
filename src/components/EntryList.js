import React, { useState } from "react";
import EntryForm from "./EntryForm";
import EntryListItem from "./EntryListItem";

const EntryList = () => {
    let [entries, setEntries] = useState([]);
    
    const saveEntry = (newEntry) => {
        const allEntries = [...entries, newEntry]
        setEntries(allEntries)
    }

    const deleteEntry = (entryToRemove) => {
        const allEntries = [...entries];
        const withDeletedEntry = allEntries.filter((entry) => entryToRemove.id !== entry.id)
        setEntries(withDeletedEntry);
    }
    
    return (
        <div>
            <EntryForm saveEntry={saveEntry}/>
            <p>Entry list:</p>
            {entries.map((entry) => 
                <EntryListItem 
                    entry={entry}
                    key={entry.id}
                    deleteEntry={deleteEntry}
                />
            )}
        </div>
    )
}

export default EntryList;