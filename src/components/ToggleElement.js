import React, { Component } from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
const onStatetoggle = "chevron-up"
const offStatetoggle = "chevron-down"

export default class ToggleElement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
    }

    getImage(toggleState) {
        return toggleState ? onStatetoggle : offStatetoggle
    }

    flipState() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <>
                {this.state.toggle ? this.props.children : ""}
                <div align="center">
                    <button style={{ backgroundColor: "transparent", borderColor: "transparent" }} type="button" onClick={() => { this.flipState() }}>
                        <MDBIcon style={{ color: "#BBC5AA" }} className='fa-3x' icon={this.getImage(this.state.toggle)} />
                    </button>
                </div>
            </>
        )
    }
}
