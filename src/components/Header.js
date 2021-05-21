import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { firebase } from "../firebase/firebase";

export const Header = ({ startLogout }) => {
    var user = firebase.auth().currentUser;
    var name;
    if (user !== null) {
        name = user.displayName;
    }
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">   
                    <Link className="header__title" to="/dashboard">
                        <h1>Blogger</h1>
                    </Link>
                    <Link className="button button--add" to="/post">Make a post</Link>
                    <p className="button button-add">Welcome, {name}</p>
                    <button className="button button--link"onClick={startLogout}>Logout</button>
                </div>
            </div>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);