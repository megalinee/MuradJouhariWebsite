import React, { Component } from 'react';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './fonts.css';

function App() {
  return (
    // style={{ backgroundImage: "linear-gradient(#0f0f0f, #333333)" }}
    <>
      <Container fluid align="center" style={{ backgroundImage: "linear-gradient(#0f0f0f, #333333)" }}>
        <Navbar.Text className="logo" style={{ fontSize: "calc(40px + 1.5vw)" }} >Megaline</Navbar.Text>

      </Container >
    </>
  );
}



export default App;
