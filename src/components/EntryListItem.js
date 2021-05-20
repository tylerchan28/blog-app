import React from "react";
import { Link } from "react-router-dom";

const EntryListItem = ({ title, description, date, id }) => {
    return (
        <Link className="list-item" to={`/edit/${id}`}>
            <div className="list-group">
                <h3 className="list-item__title">{ title }</h3>
                <p className="list-item__date">{ date }</p>
            </div>
            <p className="list-item list-item--description">{ description }</p>
        </Link>
    )
}

export default EntryListItem;