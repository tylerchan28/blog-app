import React, { useState } from "react";
import moment from "moment";
import uniqid from "uniqid";

const EntryForm = (props) => {
    const [entry, setEntry] = useState({
        id: uniqid(),
        title: "",
        description: "",
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
        console.log(entry)
        const dateCreated = moment().format("MMMM Do YYYY, h:mm:ss a");
        console.log(dateCreated)
        const submittedEntry = {
            id: uniqid(), 
            title: entry.title, 
            description: entry.description,
            date: dateCreated
        }
        props.saveEntry(submittedEntry);
        setEntry({
            title: "",
            description: "",
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Title"
                    autoFocus
                    value={entry.title}
                    onChange={onTitleChange}

                />
                <input 
                    type="text"
                    placeholder="Add a new post here"
                    value={entry.description}
                    onChange={onDescriptionChange}
                />
                <button>+</button>
            </form>
        </div>
    )
}

export default EntryForm;