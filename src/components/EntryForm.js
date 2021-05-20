import React, { useState } from "react";
import moment from "moment";

const EntryForm = (props) => {
    const [entry, setEntry] = useState({
        title: props.entry ? props.entry.title : "",
        description: props.entry ? props.entry.description : "",
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
        const dateCreated = moment().format("l");
        const submittedEntry = { 
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
            <form className="form" onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Title"
                    autoFocus
                    value={entry.title}
                    onChange={onTitleChange}
                    required
                    className="text-input"
                />
                <textarea 
                    type="text"
                    placeholder="Add a new post here"
                    value={entry.description}
                    onChange={onDescriptionChange}
                    className="textarea"
                />
                <div>
                    <button className="button">Save Post</button>
                </div>
            </form>
        </div>
    )
}

export default EntryForm;