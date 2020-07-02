import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { compose } from "redux";
//firebaseConnect for auth
import { firebaseConnect } from "react-redux-firebase";
import { notifyUser } from '../../actions/notifyActions'
import Alert from '../layout/Alert'

class Register extends Component {

    state = {
        name: '',
        email: ''
    }

    componentWillMount(){
        const {allowRegistration} = this.props.settings
        if (!allowRegistration) {
            this.props.history.push('/')
        }
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    onSubmit = e => {
        e.preventDefault()

        const { firebase, notifyUser } = this.props
        const { email, password } = this.state

        firebase.createUser({
            email,
            password
        }).catch(err => notifyUser('That User Already Exists','error'))
    }

    render() {
        const { message, messageType } = this.props.notify

        return (
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            { message ? (
                                <Alert message={message} messageType={messageType} />
                            ) : null}
                            <h1 className="text-center pb-4 pt-3">
                                <span className="text-primary">
                                    <i className="fa fa-lock"></i> Register
                                </span>
                            </h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group ">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="text" 
                                        name="email"
                                        className="form-control" 
                                        value = {this.state.email} 
                                        onChange= {this.onChange} 
                                        required 
                                    />
                                    <br/>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        name="password"
                                        className="form-control" 
                                        value = {this.state.password} 
                                        onChange= {this.onChange} 
                                        required 
                                    />
                                </div>
                                <input type="submit" value="Register" className="btn btn-primary btn-block"/>
                            </form>
                        <div/>
                    </div>
                </div>
            </div>
           </div> 
        )
    }
}

Register.propTypes = {
    firebase: PropTypes.object.isRequired,
    notify: PropTypes.object.isRequired,
    notifyUser: PropTypes.func.isRequired,
}

export default compose(
    firebaseConnect(),
    connect((state,props) => ({
        notify: state.notify,
        settings: state.settings
        }), 
        { notifyUser }
    )
)(Register)


//firebaseConnect()(Register)
