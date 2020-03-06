import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import Authform from '../components/Authform';
import { authUser } from "../store/actions/auth";

const Main = (props) => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage {...props} /> } />
                <Route exact path="/signin" render={props => {
                    return (
                        <Authform onAuth={authUser} buttonText="Log in" heading="Welcome Back." {...props} />
                    )
                }} />
                <Route exact path="/signup" render={props => {
                    return (
                        <Authform signUp onAuth={authUser} buttonText="Sign me up!" heading="Join Warbler today!" {...props} />
                    )
                }} />
            </Switch>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, null)(Main));