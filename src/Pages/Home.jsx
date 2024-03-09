import React from 'react';
import '../sytle/Home.css'

import { Container, Row, Col } from "reactstrap"
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Heroworld from "../assets/images/world.png"
import Subtitle from '../Shared/Subtitle';
import SearchBar from '../Shared/SearchBar';
import ServicesList from '../Services/ServicesList';
import FeaturedTourList from '../Components/FeaturedTours/FeaturedTourList';
const Home = () => {
    return (
        <>{/* *hero section start*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle Subtitle={'Know Before You Go'} />
                                    <img src={Heroworld} alt="" />
                                </div>
                                <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id velit eligendi ea possimus nostrum incidunt quasi mollitia voluptatum, perferendis cupiditate sed quaerat laboriosam fugiat. In illum corrupti totam distinctio.</p>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img__Box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img__Box mt-4">
                                <video src={heroVideo} alt="" controls />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img__Box mt-5">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>
                        <SearchBar />
                    </Row>
                </Container>
            </section>
            {/* *hero section end*/}
            {/* *Service subtitle section start*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="3">

                            <h5 className="services__subtitle">What we serve</h5>
                            <h2 className='services_title'>We offer our best service</h2>
                        </Col>
                        <ServicesList />
                    </Row>
                </Container>
            </section>
            {/* *Service subtitle section end*/}

            {/* * Featured tour  su section start*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='mb-5'>
                            <Subtitle Subtitle={"Explore"} />
                            <h2 className='featured__tour__title'>
                                Our featured tours
                            </h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>
            {/** Featured tour section end*/}

            {/** Experience tour section start*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="experince__content">
                                <Subtitle Subtitle={'Experience'} />

                                <h2>With our all experience <br /> we will serve you</h2>
                                <p>Lorem ipsum dolor sit, amet adipisicing.<br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                            </div>
                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successful Trip</h6>
                                </div>
                            </div>

                        </Col>



                        <Col lg='6'></Col>

                    </Row>
                </Container>
            </section>

            {/** Experience tour section end*/}



        </>
    );
}

export default Home;
