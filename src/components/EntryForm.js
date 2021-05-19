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
        const dateCreated = moment().format("l");
        console.log(dateCreated)
        const submittedEntry = {
            id: uniqid(), 
            title: entry.title, 
            description: entry.description,
            date: dateCreated
        }
        props.onSubmit(submittedEntry);
        setEntry({
            title: "",
            description: "",
        })
    }

    return (
        <div>
            <form className="entry-form" onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Title"
                    autoFocus
                    value={entry.title}
                    onChange={onTitleChange}
                    required
                    className="title-input"
                />
                <textarea 
                    type="text"
                    placeholder="Add a new post here"
                    value={entry.description}
                    onChange={onDescriptionChange}
                    className="description-textarea"
                />
                <button>Create Post</button>
            </form>
        </div>
    )
}

export default EntryForm;