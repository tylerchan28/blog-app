import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import AddEntryPage from "./../components/AddEntryPage";
import DashboardPage from "./../components/DashboardPage";
import EditEntryPage from "./../components/EditEntryPage";
import Header from "./../components/Header";
import LoginPage from "./../components/LoginPage";
import NotFoundPage from "./../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory()

const AppRouter = () => ( 
    <Router history={history}>     
        <div>    
            <Header />
            <Switch>    
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/post" component={AddEntryPage} />
                <Route path="/edit/:id" component={EditEntryPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router> 
)

export default AppRouter;
