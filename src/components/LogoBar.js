import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import ScalingText from './ScalingText';

export default class LogoBar extends Component {
    render() {
        return (
            <Container fluid style={{ backgroundColor: "#80475E" }}>
                <Navbar expand="">
                    <Navbar.Text className="logo" style={{ color: "#EDDFEF" }}>
                        <div style={{ width: "70vw" }}>
                            <ScalingText size="30px" scale=".5vw">Murad Jouhari</ScalingText>
                        </div>
                    </Navbar.Text>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link className="logo" style={{ color: "#cdc0cf" }} href="#aboutme">About Me</Nav.Link>
                            <Nav.Link className="logo" style={{ color: "#cdc0cf" }} href="#experiencemaker">Experience Maker</Nav.Link>
                            <Nav.Link className="logo" style={{ color: "#cdc0cf" }} href="#teamplayer">Team Player</Nav.Link>
                            <Nav.Link className="logo" style={{ color: "#cdc0cf" }} href="#aspiringdev">Aspiring Developer</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container >
        )
    }
}
