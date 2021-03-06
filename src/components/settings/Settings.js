import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
//import { compose } from "redux";
//firebaseConnect for auth
//import { firebaseConnect } from "react-redux-firebase";
import {
    setAllowRegistration,
    setDisableBalanceOnAdd,
    setDisableBalanceOnEdit
} from '../../actions/settingsActions'


class Settings extends Component {

    disableBalanceOnAddChange = e => {
        const { setDisableBalanceOnAdd } = this.props
        setDisableBalanceOnAdd()
    }

    disableBalanceOnEditChange = e => {
        const { setDisableBalanceOnEdit } = this.props
        setDisableBalanceOnEdit()
    }

    allowRegistrationChange = e => {
        const { setAllowRegistration } = this.props
        setAllowRegistration()
    }

    render() {
        const {disableBalanceOnAdd, disableBalanceOnEdit, 
            allowRegistration} = this.props.settings
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fa fa-arrow-circle-left" /> Back to Dashboard
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Edit Settings</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Allow Registration</label> {'  '}
                                <input 
                                    type="checkbox" 
                                    name="allowRegistration" 
                                    checked = {!!allowRegistration} 
                                    onChange= {this.allowRegistrationChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Disable Balance On Add</label> {'  '}
                                <input 
                                    type="checkbox" 
                                    name="disableBalanceOnAdd" 
                                    checked = {!!disableBalanceOnAdd} 
                                    onChange= {this.disableBalanceOnAddChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Disable Balance On Edit</label> {'  '}
                                <input 
                                    type="checkbox" 
                                    name="disableBalanceOnEdit" 
                                    checked = {!!disableBalanceOnEdit} 
                                    onChange= {this.disableBalanceOnEditChange}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Settings.propTypes = {
    settings: PropTypes.object.isRequired,
    setDisableBalanceOnAdd: PropTypes.func.isRequired,
    setDisableBalanceOnEdit: PropTypes.func.isRequired,
    setAllowRegistration: PropTypes.func.isRequired
}

export default connect((state,props) => ({
    auth: state.firebase.auth,
    settings: state.settings
}),
    {setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit}
)(Settings)