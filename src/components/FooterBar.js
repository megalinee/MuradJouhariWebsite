import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import ScalingText from './ScalingText';

export default class FooterBar extends Component {
    render() {
        return (
            <Container fluid style={{ backgroundColor: "#57303f" }}>
                <Navbar expand="">
                    <Navbar.Text className="logo" style={{ color: "#c5b9c7" }}>
                        <div style={{ width: "72vw" }}>
                            <ScalingText size="14px" scale=".5vw">© 2024 Murad Jouhari</ScalingText>
                        </div>
                    </Navbar.Text>
                    <MDBBtn target="_blank" className='' tag='a' color='none' style={{ paddingLeft: "0px" }} href='https://instagram.com/murad_is_kewl/'>
                        <MDBIcon style={{ color: "#cdc0cf" }} fab className='fa-3x' icon='instagram' />
                    </MDBBtn>

                </Navbar>
            </Container >
        )
    }
}
