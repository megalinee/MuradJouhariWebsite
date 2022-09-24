import React, { Component } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Collapse } from '@mui/material';
import { motion } from "framer-motion"

export default class ToggleElement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
    }

    flipState() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <>
                <div>
                    <Collapse in={this.state.toggle}>
                        {this.props.children}
                    </Collapse>
                </div>
                <motion.div align="center" animate={{ rotate: this.state.toggle ? 180 : 0 }}>
                    <button data-aos={this.props.dataaos} style={{ backgroundColor: "transparent", borderColor: "transparent" }} type="button" onClick={() => { this.flipState() }}>
                        <MDBIcon style={{ color: "#BBC5AA" }} className='fa-3x' icon={"chevron-down"} />
                    </button>
                </motion.div>
            </>
        )
    }
}
