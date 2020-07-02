import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";


class AddClient extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        balance: ''
    }

    onChange = (e) => this.setState({ [e.target.name] : e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        const newClient = this.state

        const { firestore, history } = this.props

        // if no balance make 0
        if(newClient.balance === '') {
            newClient.balance = 0;
        }

        firestore.add({collection: 'clients'}, newClient).then(() => history.push('/'))
    }
    render() {
        const { disableBalanceOnAdd } = this.props.settings
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fa fa-arrow-circle-left" /> Back to Dashboard
                        </Link>
                    </div>
                </div>
                <br/>
                <div className="card col-md-8 mx-auto">
                    <div className="card-header">Add Client</div>
                    <div className="card-body">
                        <form onSubmit = {this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="firstName" 
                                    minLength = "2"
                                    required
                                    onChange = {this.onChange}
                                    value = {this.state.firstName}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="lastName" 
                                    minLength = "2"
                                    required
                                    onChange = {this.onChange}
                                    value = {this.state.lastName}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control"
                                    name="email"
                                    onChange = {this.onChange}
                                    value = {this.state.email}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="phone" 
                                    minLength = "10"
                                    required
                                    onChange = {this.onChange}
                                    value = {this.state.phone}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="balance">Balance</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="balance" 
                                    onChange = {this.onChange}
                                    value = {this.state.balance}
                                    disabled = {disableBalanceOnAdd}
                                />
                            </div>

                            <input type="submit" value="Submit" className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

AddClient.propTypes = {
    firestore: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(),
    connect((state,props) => ({
        settings: state.settings
    }))
)(AddClient)
