import React from 'react' 

import about from "../assets/images/about.jpg"
import team1 from "../assets/images/team1.jpg"
import team2 from "../assets/images/team2.jpg"
import team3 from "../assets/images/team3.jpg"
import team4 from "../assets/images/team4.jpg"
import team5 from "../assets/images/team5.jpg"
import team6 from "../assets/images/team6.jpg"
import team7 from "../assets/images/team7.jpg"
import team8 from "../assets/images/team8.jpg"
import team9 from "../assets/images/team9.jpg"


const About = () => {
    return (
        <div>
            <div className="inner-banner">
                <section className="w3l-breadcrumb py-5">
                    <div className="container py-lg-5 py-md-3">
                        <h2 className="title">About Us</h2>
                    </div>
                </section>
            </div>
            {/* banner bottom shape  */}
            <div className="position-relative">
                <div className="shape overflow-hidden">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            {/* banner bottom shape  */}
            <section className="w3l-aboutblock1 py-5" id="about">
                <div className="container py-lg-5 py-md-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="title-small">A little about Us</h5>
                            <h3 className="title-big">Welcome to Human Civilization and Awarness Program Nepal</h3>
                            <p className="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet viverra ornare
                                elit. Non quae, ut diam libero erat.</p>
                            <p className="mt-3">Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut sed diam libero erat. Aenean faucibus
                                nibh et justo cursus.</p>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-5">
                            <img src={about} alt="" className="radius-image img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* forms  */}
            <section className="w3l-forms-9 py-5" id="">
                <div className="main-w3 py-lg-5 py-md-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="main-midd col-lg-9">
                                <h3 className="title-big">Facts about Save Poor charity</h3>
                                <p className="mt-3">A lot of work goes down at the grass root level in villages in the remotest corners
                                    as
                                    well as the most populous metros across India, with schools and government bodies.
                                    We need your contributions to keep coming in.</p>
                            </div>
                        </div>
                        <div className="donar-img mt-5">
                            <div className="right-side text-center">
                                <span className="fa fa-heart"></span>
                                <p>OUR TOP DONAR</p>
                                <a className="btn btn-text" href="#ViewMore">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Happy Volunteers  */}
            <section className="w3l-team-main" id="team">
                <div className="team py-5">
                    <div className="container py-lg-5">
                        <div className="title-content text-center">
                            <h3 className="title-big">Happy Volunteers</h3>
                        </div>
                        <div className="team-row mt-md-5 mt-4">
                            <div className="team-wrap">
                                <div className="team-member text-center">
                                    <div className="team-img">
                                        <img src={team1} alt="" className="radius-image img-fluid"/>
                                    </div>
                                    <a href="#url" className="team-title">Luke jacobs</a>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                             {/* end team member  */}

                            <div className="team-wrap">
                                <div className="team-member text-center">
                                    <div className="team-img">
                                        <img src={team2} alt="" className="radius-image img-fluid"/>
                                    </div>
                                    <a href="#url" className="team-title">Claire olson</a>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                             {/* end team member */}

                            <div className="team-wrap">
                                <div className="team-member last text-center">
                                    <div className="team-img">
                                        <img src={team3} alt="" className="radius-image img-fluid"/>
                                    </div>
                                    <a href="#url" className="team-title">Phillip hunt</a>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                             {/* end team member  */}

                            <div className="team-wrap">
                                <div className="team-member last text-center">
                                    <div className="team-img">
                                        <img src={team4} alt="" className="radius-image img-fluid"/>
                                    </div>
                                    <a href="#url" className="team-title">Sara grant</a>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                             {/* end team member  */}

                            <div className="team-wrap">
                                <div className="team-member last text-center">
                                    <div className="team-img">
                                        <img src={team5} alt="" className="radius-image img-fluid"/>
                                    </div>
                                    <a href="#url" className="team-title">Sara grant</a>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                             {/* end team member */}

                            <div className="team-wrap">
                                <div className="team-member last text-center">
                                    <div className="team-img">
                                        <img src={team6} alt="" className="radius-image img-fluid"/>
                                    </div>
                                    <a href="#url" className="team-title">Sara grant</a>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                             {/* end team member  */}

                            <div className="team-wrap">
                                <div className="team-member last text-center">
                                    <div className="team-img">
                                        <img src={team7} alt="" className="radius-image img-fluid"/>
                                    </div>
                                    <a href="#url" className="team-title">Sara grant</a>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                             {/* end team member */}

                            <div className="team-wrap">
                                <div className="team-member last text-center">
                                    <div className="team-img">
                                        <img src={team8} alt="" className="radius-image img-fluid"/>
                                    </div>
                                    <a href="#url" className="team-title">Sara grant</a>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                             {/* end team member */}

                            <div className="team-wrap">
                                <div className="team-member last text-center">
                                    <div className="team-img">
                                        <img src={team9} alt="" className="radius-image img-fluid"/>
                                    </div>
                                    <a href="#url" className="team-title">Sara grant</a>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                             {/* end team member */}

                            <div className="team-apply">
                                <a href="#url" className="team-title m-0"><span className="fa fa-plus-circle d-block mb-3"></span> Apply for Volunteer</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* volunteer-sec */}
        </div>
    )
}

export default About;