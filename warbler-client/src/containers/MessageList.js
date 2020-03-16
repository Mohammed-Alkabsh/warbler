import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
    
    componentDidMount() {
        this.props.fetchMessages();
    }

    render(){
        const { messages } = this.props;
        console.log(messages)
        let MessageList = messages.map((msg, index) => (
            <MessageItem key={msg._id} date={msg.createAt} username={msg.user.username} text={msg.text} profileImageUrl={msg.user.profileImageUrl}/>
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
        messages: state.messages
    }
}

export default connect(mapStateToProps, { fetchMessages })(MessageList);