import React from "react";
import { Link } from "react-router-dom";
import EntryFilters from "./EntryFilters";
import EntryList from "./EntryList";

const DashboardPage = () => {
    return ( 
        <div>
            <div className="content-container">
                <Link className="button button--add" to="/post">Make a post</Link>
            </div>  
            <div className="list-entries">
                <EntryFilters />
                <EntryList />
            </div>
        </div>
    )
}

export default DashboardPage;

