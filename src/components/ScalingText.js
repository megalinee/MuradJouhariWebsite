import React, { Component } from 'react'

export default class ScalingText extends Component {
    render() {
        return (
            <div className={this.props.className} style={{ fontSize: "calc(" + this.props.size + " + " + this.props.scale + ")" }} >{this.props.children}</div>
        )
    }
}
