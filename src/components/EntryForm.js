import React, { useState } from "react";
import moment from "moment";
import uniqid from "uniqid";

const EntryForm = (props) => {
    const [entry, setEntry] = useState({
        id: uniqid(),
        title: "",
        description: "",
        dateCreated: moment().format("MMMM Do YYYY, h:mm:ss a"),
    })

    const onTitleChange = (e) => {
        const title = e.target.value;
        setEntry({
            ...entry,
            title
        })
    }
    
    const onDescriptionChange = (e) => {
        const description = e.target.value;
        setEntry({
            ...entry,
            description
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.saveEntry(entry);
        setEntry({
            id: uniqid(),
            title: "",
            description: "",
            dateCreated: moment().format("MMMM Do YYYY, h:mm:ss a"),
        })
    
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="title"
                    autoFocus
                    value={entry.title}
                    onChange={onTitleChange}

                />
                <input 
                    type="text"
                    placeholder="description"
                    value={entry.description}
                    onChange={onDescriptionChange}
                />
                <button>+</button>
            </form>
        </div>
    )
}

export default EntryForm;