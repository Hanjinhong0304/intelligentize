import React, { Component } from 'react'
import "./scss/style.css"
export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <img src={require("@/public/img/second.jpg")} alt=""/>
            </div>
        )
    }
}
