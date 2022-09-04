import React from 'react';
import AOS from 'aos';
import { Canvas } from "react-three-fiber"
import { Container, Card, Button, Ratio, Image, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './fonts.css';
import 'aos/dist/aos.css';

// Custom Components
import ScalingText from './components/ScalingText';
import Spacer from './components/Spacer';
import Gradient from './components/Gradient';
import AboutMeSphere from './components/AboutMeSphere';

// Images
import portrait from './images/Portrait.jpg'
import sphere from './images/sphere.png'
import vector from './images/vector.png'
import attendance from './images/qrcodeattendance.png'
import jbox from './images/JBox.png'
import LogoBar from './components/LogoBar';
import FooterBar from './components/FooterBar';
import ToggleElement from './components/ToggleElement';

AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () { AOS.refresh(); }, 500);
});


function HomePage() {
    return (
        <>

            {/*TITLE*/}
            <LogoBar />

            {/*ABOUT ME*/}
            <Container id="aboutme" fluid style={{ backgroundColor: "#297373", width: "100%", marginBottom: "-30vh", overflow: "hidden" }}>
                <Spacer size="2vh"></Spacer>
                <div data-aos-duration="500" data-aos="fade-in" style={{ position: "relative", top: "0px", height: "30vh" }}>
                    <Canvas >
                        <ambientLight intensity={0.5}></ambientLight>
                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                        <AboutMeSphere></AboutMeSphere>
                    </Canvas>
                </div>
                <div style={{ position: "relative", top: "-32vh" }} >
                    <div data-aos-duration="500" data-aos="fade-in" align="center" style={{ color: "#E9D758" }}>
                        <ScalingText size="0px" className="aboutme" scale="12vh">
                            ABOUT
                            <br></br>
                            ME
                        </ScalingText>
                    </div>
                    <Row style={{ display: "flex", alignItems: "center" }}>
                        <Col xs={12} md={6}>
                            <Image align="center" className="shadow-lg" data-aos-duration="500" data-aos="fade-in" style={{ backgroundColor: "#F79D65", height: "auto", width: "100%" }} src={portrait} rounded></Image>
                        </Col>
                        <Col xs={0} md={6}>
                            <ScalingText size="40px" className="logo" scale="4vw">
                                <div align="left" data-aos-duration="700" data-aos="fade-left" style={{ color: "#413C58" }}>
                                    HELLO,
                                </div>
                            </ScalingText>
                            <ScalingText size="15px" className="readableText" scale="1vw">
                                <div align="left" data-aos-duration="1000" data-aos="fade-left" style={{ color: "#E6E6E6" }}>
                                    I'm Murad. I currently attend Tomball Memorial High School as a senior, where I partake in Computer Science UIL.
                                    My goal is to graduate college with a Computer Science degree and help find breakthroughs in the emerging field of Machine Learning.
                                    I enjoy spending my free time playing with my cats, riding around on my bike, and <a style={{ textDecoration: 'none', color: "#FF8552" }} href="https://music.apple.com/profile/mjouhari" target="_blank" rel="noreferrer" >listening to music. </a>
                                    There's so much to learn about everything, a lot of the time I have no idea where to start.
                                </div>
                            </ScalingText>
                        </Col>
                    </Row>

                    <Spacer size="2vh"></Spacer>
                </div>
            </Container>

            {/*EXPERIENCE MAKER*/}
            <Container id="experiencemaker" fluid align="center" style={{ backgroundColor: "#030027" }}>

                <Spacer size="3vh"></Spacer>
                <ScalingText size="50px" className="iama" scale="4vw">
                    <div data-aos-duration="1000" data-aos="fade-in" style={{ color: "#87BAAB" }}>
                        I AM AN
                    </div>
                </ScalingText>
                <Spacer size="3vh"></Spacer>
                <div data-aos="fade-up" data-aos-duration="1000" style={{ color: "#E0BAD7" }}>
                    <ScalingText size="40px" className="expmkr" scale="1.5vw">
                        EXPERIENCE MAKER
                    </ScalingText>
                </div>
                <Card data-aos="flip-up" data-aos-duration="2000" className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ width: "calc(200px + 35vw)" }}>
                    <Card.Img className="shadow-lg" src={sphere} height="vw" alt="Sphere" />
                    <Card.ImgOverlay>
                        <Card.Title className="align-text-left sphere"><ScalingText size="40px" scale="5vw">SPHERE</ScalingText></Card.Title>
                        <Card.Text><ScalingText size="15px" scale="2vw">Music Visualizer</ScalingText></Card.Text>
                        <Button target="_blank" rel="noreferrer" variant="dark" href="https://megaline.dev/sphere/">Visit the website!</Button>
                    </Card.ImgOverlay>
                </Card>
                <Spacer size="10vh"></Spacer>
            </Container >

            <Gradient colors="#030027, #0C1618"><Spacer size="10vh"></Spacer></Gradient>
            {/*TEAM PLAYER*/}
            <Container id="teamplayer" fluid align="center" style={{ backgroundColor: "#0C1618" }}>
                <Spacer size="5vh"></Spacer>
                <div data-aos="fade-up" style={{ color: "#CAFFD0" }}><ScalingText size="40px" className="team" scale="1.5vw">TEAM PLAYER</ScalingText></div>
                <Card data-aos="flip-up" data-aos-duration="2000" className="bg-dark text-white " style={{ width: "calc(200px + 35vw)" }}>
                    <Card.Img className="shadow" src={vector} height="vw" alt="Sphere" />
                    <Card.ImgOverlay>
                        <Card.Subtitle className="outline-black vector" style={{ color: "#db7500", marginTop: "calc(5vh - 20px)" }}><ScalingText size="25px" scale="4vw">
                            Vector 8177
                        </ScalingText></Card.Subtitle>
                        <Card.Text className="logo outline-black" style={{ color: "#FEEFDD", fontWeight: "200", marginBottom: "0px" }}><ScalingText size="15px" scale="3vw">
                            Lead Programmer
                        </ScalingText></Card.Text>
                        <Button style={{ marginTop: "0px" }} target="_blank" rel="noreferrer" variant="dark" href="https://www.vector8177.com/">Learn more about the FIRST Robotics Competition!</Button>
                    </Card.ImgOverlay>
                </Card>
                <Spacer size="2vh"></Spacer>
                <ToggleElement dataaos="zoom-in-up" >
                    <div onchange="AOS.reload()" style={{ width: "calc(200px + 35vw)", height: 'auto' }}>
                        <Ratio aspectRatio="16x9">
                            <iframe className="shadow" data-aos="zoom-in-up" class="embed-responsive-item" src="https://www.youtube.com/embed/exc4-yaS0zI" title="2022 Pasadena #2 Recap | Team 8177 Vector" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Ratio>
                    </div>
                </ToggleElement>
                <Spacer size="2vh"></Spacer>
            </Container >

            <Gradient colors="#0C1618, #754043"><Spacer size="10vh"></Spacer></Gradient>
            {/*ASPIRING DEVELOPER*/}
            <Container id="aspiringdev" fluid align="center" style={{ backgroundColor: "#754043", overflow: "hidden" }}>
                <div data-aos="fade-up" style={{ color: "#BCA371" }}><ScalingText size="40px" className="aspdev" scale="1.5vw">& ASPIRING DEVELOPER</ScalingText></div>
                <Card data-aos="flip-up" data-aos-duration="2000" className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ width: "calc(200px + 35vw)" }}>
                    <Card.Img className="shadow-lg" src={attendance} height="vw" alt="Sphere" />
                    <Card.ImgOverlay>
                        <Spacer size=".5vw"></Spacer>
                        <Card.Title style={{ color: "#ffbfbf" }} className="align-text-left outline-black qrcode"><ScalingText size="30px" scale="3vw">QR Code Attendance</ScalingText></Card.Title>
                        <div className="" style={{ color: "white" }}>
                            <Spacer size="1vw"></Spacer>
                            <Card.Text className="box" style={{ color: "white" }}><ScalingText size="5px" scale="1vw">
                                An attendance tracker that utilizies live QR & Barcode detection. Built in Python.
                            </ScalingText></Card.Text>
                        </div>
                        <Spacer size="2vw"></Spacer>
                        <Button target="_blank" rel="noreferrer" variant="dark" href="https://github.com/megalinee/QRCodeAttendance">Visit the GitHub page!</Button>
                    </Card.ImgOverlay>
                </Card>

                <Spacer size="5vh"></Spacer>

                <Card data-aos="flip-up" data-aos-duration="2000" className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ width: "calc(200px + 35vw)" }}>
                    <Card.Img className="shadow-lg" src={jbox} height="vw" alt="Sphere" />
                    <Card.ImgOverlay>
                        <Card.Title style={{ color: "#FF7C99" }} className="align-text-left jbox"><ScalingText size="10px" scale="15vw">JBOX</ScalingText></Card.Title>
                        <div className="FIRST" style={{ color: "#741B47" }}>
                            <Card.Text>
                                A Jackbox inspired party game built completely in Java with LAN network integration
                            </Card.Text>
                        </div>
                        <Spacer size="1vh"></Spacer>
                        <Button target="_blank" rel="noreferrer" variant="dark" href="https://megalinegg.itch.io/jbox">Visit the itch.io page!</Button>
                    </Card.ImgOverlay>
                </Card>
                <Spacer size="5vh"></Spacer>
            </Container >

            {/*FOOTER*/}
            <FooterBar />
        </>
    );
}



export default HomePage;