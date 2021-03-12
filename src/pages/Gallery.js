import React from 'react'
import blog1 from "../assets/images/blog1.jpg"
import blog2 from "../assets/images/blog2.jpg"
import blog3 from "../assets/images/blog3.jpg"
import blog4 from "../assets/images/blog4.jpg"
import blog5 from "../assets/images/blog5.jpg"

const Gallery = () => {
    return (
        <div>
            {/* header */}
            <div class="inner-banner">
                <section class="w3l-breadcrumb py-5">
                    <div class="container py-lg-5 py-md-3">
                        <h2 class="title">Gallery</h2>
                    </div>
                </section>
            </div>

            {/* banner bottom shape */}
            {/* causes-sec */}
            <div class="w3-services py-5">
                <div class="container py-lg-4 py-md-3">
                    <div class="row w3-services-grids">
                        <div class="col-lg-4 col-md-6 causes-grid">
                            <div class="causes-grid-info">
                                <a href="#cause"><img src={blog1} class="img-fuild radius-image-full"
                                        alt=""/></a>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 causes-grid">
                            <div class="causes-grid-info">
                                <a href="#cause"><img src={blog2} class="img-fuild radius-image-full"
                                        alt=""/></a>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 causes-grid">
                            <div class="causes-grid-info">
                                <a href="#cause"><img src={blog3} class="img-fuild radius-image-full"
                                        alt=""/></a>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 causes-grid">
                            <div class="causes-grid-info">
                                <a href="#cause"><img src={blog4} class="img-fuild radius-image-full"
                                        alt=""/></a>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 causes-grid">
                            <div class="causes-grid-info">
                                <a href="#cause"><img src={blog5} class="img-fuild radius-image-full"
                                        alt=""/></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Gallery;