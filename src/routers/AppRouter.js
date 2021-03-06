import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import AddEntryPage from "./../components/AddEntryPage";
import DashboardPage from "./../components/DashboardPage";
import EditEntryPage from "./../components/EditEntryPage";
import LoginPage from "./../components/LoginPage";
import NotFoundPage from "./../components/NotFoundPage";
import ReadPage from "./../components/ReadPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory()

const AppRouter = () => ( 
    <Router history={history}>     
        <div>    
            <Switch>    
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/post" component={AddEntryPage} />
                <PrivateRoute path="/edit/:id" component={EditEntryPage} />
                <PrivateRoute path="/read/:id" component={ReadPage} />
                <PrivateRoute component={NotFoundPage} />
            </Switch>
        </div>
    </Router> 
)

export default AppRouter;
