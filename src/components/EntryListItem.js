import React from "react";
import { Link } from "react-router-dom";

const EntryListItem = ({ title, description, date, id }) => {
    return (
        <Link to={`/edit/${id}`}>
            <div>
                <h3>{ title }</h3>
                <p>{ date }</p>
            </div>
            <p>{ description }</p>
        </Link>
    )
}

export default EntryListItem;