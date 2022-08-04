import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import ScalingText from './ScalingText';

export default class FooterBar extends Component {
    render() {
        return (
            <Container fluid style={{ backgroundColor: "#121113" }}>
                <Navbar expand="">
                    <Navbar.Text className="logo" style={{ color: "#BBC5AA" }}>
                        <div style={{ width: "72vw" }}>
                            <ScalingText size="14px" scale=".5vw">© 2022 Murad Jouhari</ScalingText>
                        </div>
                    </Navbar.Text>
                    <MDBBtn target="_blank" className='' tag='a' color='none' style={{ color: "#BBC5AA", paddingLeft: "0px" }} href='https://instagram.com/murad_is_kewl/'>
                        <MDBIcon fab className='fa-3x' icon='instagram' />
                    </MDBBtn>

                </Navbar>
            </Container >
        )
    }
}
