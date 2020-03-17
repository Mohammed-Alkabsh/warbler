import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessages } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
    
    componentDidMount() {
        this.props.fetchMessages();
    }

    render(){
        const { messages, removeMessages, currentUser } = this.props;
        console.log(messages)
        let MessageList = messages.map((msg, index) => (
            <MessageItem isCurrentUser={currentUser === msg.user._id} removeMessage={removeMessages.bind(this, msg.user._id, msg._id)} key={msg._id} date={msg.createAt} username={msg.user.username} text={msg.text} profileImageUrl={msg.user.profileImageUrl}/>
        ))
        return (
            <div className="row col-lg-8 col-sm-12">
                <div className="offset-1 col-sm-10">
                    <ul className="list-group" id="messages">
                        {MessageList}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        currentUser: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchMessages, removeMessages })(MessageList);