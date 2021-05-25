  
import React from "react";
import { firebase } from "../firebase/firebase"
import { Link } from "react-router-dom";

const EntryListItem = ({ title, date, id, name, uid}) => {
    var user = firebase.auth().currentUser;
    var currentUid;
    if (user !== null) {
        currentUid = user.uid;
    }
    if (currentUid === uid) {
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
    } else {
        return (
            <Link className="list-item" to={`/read/${id}`}>
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
}

export default EntryListItem;