import React from 'react'
import home from "../assets/images/home.png"
import health from "../assets/images/health.png"
import education from "../assets/images/education.png"

const Home = () => {
    return (
        <div>
            <section class="w3-services-ab py-5" id="mission">
                <div class="container py-lg-5 py-md-4">
                    <h3 class="title-big text-center mb-5">Our Mission and Goals</h3>
                    <div class="w3-services-grids">
                        <div class="fea-gd-vv row">
                            <div class="col-lg-4 col-md-6">
                                <div class="float-lt feature-gd">
                                    <div class="icon">
                                        <img src={home} alt="" class="img-fluid"/>
                                    </div>
                                    <div class="icon-info">
                                        <h5>Cow Protection.</h5>
                                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod init
                                            tempor primis in init.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
                                <div class="float-mid feature-gd">
                                    <div class="icon">
                                        <img src={education} alt="" class="img-fluid"/>
                                    </div>
                                    <div class="icon-info">
                                        <h5>Children Protection.</h5>
                                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod init
                                            tempor primis in init.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-lg-0 mt-4">
                                <div class="float-rt feature-gd">
                                    <div class="icon">
                                        <img src={health} alt="" class="img-fluid"/>
                                    </div>
                                    <div class="icon-info">
                                        <h5>Brahmanical Persons Service.</h5>
                                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod init
                                            tempor primis in init.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-4 pt-md-2">
                                <div class="float-lt feature-gd">
                                    <div class="icon">
                                        <img src={home} alt="" class="img-fluid"/>
                                    </div>
                                    <div class="icon-info">
                                        <h5>Help Unprotected women.</h5>
                                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod init
                                            tempor primis in init.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-4 pt-md-2">
                                <div class="float-lt feature-gd">
                                    <div class="icon">
                                        <img src={home} alt="" class="img-fluid"/>
                                    </div>
                                    <div class="icon-info">
                                        <h5>Protect Old Age Peoples.</h5>
                                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod init
                                            tempor primis in init.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
