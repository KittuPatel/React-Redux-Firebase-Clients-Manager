import React, { Component } from 'react'
import loader from './loader.gif'

class Loader extends Component {
    render() {
        return (
            <div>
                <img src={loader} alt="Loading..." style={{ width: '50px', margin: 'auto', display: 'block'}} />
            </div>
        )
    }
}

export default Loader
