import React from "react";
import { Link } from "react-router-dom";

const EntryListItem = ({ title, date, id, name}) => {
    return (
        <Link className="list-item" to={`/edit/${id}`}>
            <div className="list-group">
                <div>
                <h3 className="list-item__title">{ title }</h3>
                <p className="list-item__date">by: {name}</p>
                </div>
                <p className="list-item__date">{ date }</p>
            </div>
        </Link>
    )
}

export default EntryListItem;
