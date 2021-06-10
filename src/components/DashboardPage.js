import React from "react";
import { Link } from "react-router-dom";
import EntryFilters from "./EntryFilters";
import EntryList from "./EntryList";

const DashboardPage = () => {
    return ( 
        <div>
            <div className="content-container content-container--filter">
                <Link className="button button--add" to="/post">Make a post</Link>
                <EntryFilters />
            </div>  
            <div className="list-entries">
                <EntryList />
            </div>
        </div>
    )
}

export default DashboardPage;

