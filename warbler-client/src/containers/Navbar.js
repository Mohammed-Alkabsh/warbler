import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';


class Navbar extends Component {

    logout = e => {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const { currentUser } = this.props;
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <h4>Warbler</h4>
                    </Link>
                    {currentUser.isAuthenticated ? (
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <Link to={`/users/${currentUser.user.id}/messages/new`}>New Message</Link>
                            </li>
                            <li className="nav-item">
                                <a onClick={this.logout}>Log out</a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <Link to="/signup">Sign up</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signin">Log in</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {logout})(Navbar);