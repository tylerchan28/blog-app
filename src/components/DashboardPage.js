import React from "react";
import EntryFilters from "./EntryFilters";
import EntryList from "./EntryList";

const DashboardPage = () => {
    return ( 
        <div>
            <EntryFilters />
            <EntryList />
        </div>
    )
}

export default DashboardPage;

