import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";
import { addError } from "../store/actions/errors";

class MessageForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            message: ""
        }
    }

    handleNewMessage = async event => {
        event.preventDefault();
        try {
            await this.props.postNewMessage(this.state.message);
            this.setState({
                message: ""
            });
            this.props.history.push("/");
        } catch (error) {
            return dispatch => {
                dispatch(addError(error.message));
            }
        }
    }

    render() {
        return (
            <form onSubmit={this.handleNewMessage}>
                {this.props.errors.message && (
                    <div className="alert alert-danger">{this.props.errors}</div>
                )}
                <input type="text" className="form-control" name="text" value={this.state.message} onChange={e => this.setState({message: e.target.value})} />
                <button className="btn btn-primary" type="submit">
                    Add my message
                </button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errors
    };
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm);