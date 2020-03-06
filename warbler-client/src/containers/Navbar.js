import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <h4>Warbler</h4>
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link to="/signup">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin">Log in</Link>
                        </li>
                    </ul>
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

export default connect(mapStateToProps, null)(Navbar);