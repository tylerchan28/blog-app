import React from "react";
import { Link } from "react-router-dom";
import EntryList from "./EntryList";

const DashboardPage = () => (
    <div>
        <Link to="/post">Make a post</Link>
        <EntryList />
    </div>
)

export default DashboardPage;