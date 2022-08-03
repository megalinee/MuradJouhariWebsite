import React, { Component } from 'react'

export default class Gradient extends Component {
    render() {
        return (
            <div style={{ backgroundImage: "linear-gradient(" + this.props.colors + ")" }}>
                {this.props.children}
            </div >
        )
    }
}
