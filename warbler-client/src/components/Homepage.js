import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeLine from "./MessageTimeLine"

const Homepage = ({currentUser}) => {
    if( !currentUser.isAuthenticated){
        return (
            <div className="home-hero">
                <div className="bird-image"></div>
                <h1>What's Happening?</h1>
                <h4>New to Warbler?</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign up
                </Link>
            </div>
        );
    }else {
        return (
            <div className="news-feed">
                <MessageTimeLine profileImageUrl={currentUser.user.profileImageUrl} username={currentUser.user.username} />
            </div>
        )
    }
}

export default Homepage;