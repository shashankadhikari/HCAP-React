import React from 'react'
import blog1 from "../assets/images/blog1.jpg"
import blog2 from "../assets/images/blog2.jpg"
import blog3 from "../assets/images/blog3.jpg"
import blog4 from "../assets/images/blog4.jpg"
import blog5 from "../assets/images/blog5.jpg"

const Causes = () => {
    return (
        <div>
            <div class="inner-banner">
                <section class="w3l-breadcrumb py-5">
                    <div class="container py-lg-5 py-md-3">
                        <h2 class="title">Causes</h2>
                    </div>
                </section>
            </div>

 {/* banner bottom shape  */}
{/* causes-sec */}
            <div class="w3-services py-5">
                <div class="container py-lg-4 py-md-3">
                    <div class="row w3-services-grids">
                        <div class="col-lg-4 col-md-6 causes-grid">
                            <div class="causes-grid-info">
                                <a href="#cause" class="cause-title-wrap">
                                    <p class="title">Children </p>
                                    <h4 class="cause-title">Protection of Children
                                    </h4>
                                </a>
                                <a href="#cause"><img src={blog1} class="img-fuild radius-image-full"
                                        alt=""/></a>
                                <p class="counter-inherit">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis perferendis, dignissimos dolore 
                                    excepturi delectus voluptate repellat temporibus 
                                    dolores consectetur, unde tempore ratione fugit eum veniam reprehenderit deleniti optio ipsum assumenda.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 causes-grid">
                            <div class="causes-grid-info">
                                <a href="#cause" class="cause-title-wrap">
                                    <p class="title">Cows </p>
                                    <h4 class="cause-title">Protection of Cows
                                    </h4>
                                </a>
                                <a href="#cause"><img src={blog2} class="img-fuild radius-image-full"
                                        alt=""/></a>
                                <p class="counter-inherit">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis perferendis, dignissimos dolore 
                                    excepturi delectus voluptate repellat temporibus 
                                    dolores consectetur, unde tempore ratione fugit eum veniam reprehenderit deleniti optio ipsum assumenda.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 causes-grid">
                            <div class="causes-grid-info">
                                <a href="#cause" class="cause-title-wrap">
                                    <p class="title">UnProtected Women</p>
                                    <h4 class="cause-title">Save UnProtected Women
                                    </h4>
                                </a>
                                <a href="#cause"><img src={blog3} class="img-fuild radius-image-full"
                                        alt=""/></a>
                                <p class="counter-inherit">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis perferendis, dignissimos dolore 
                                    excepturi delectus voluptate repellat temporibus 
                                    dolores consectetur, unde tempore ratione fugit eum veniam reprehenderit deleniti optio ipsum assumenda.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 causes-grid">
                            <div class="causes-grid-info">
                                <a href="#cause" class="cause-title-wrap">
                                    <p class="title">Brahmanical</p>
                                    <h4 class="cause-title">Protection of Brahmanical Persons
                                    </h4>
                                </a>
                                <a href="#cause"><img src={blog4} class="img-fuild radius-image-full"
                                        alt=""/></a>
                                <p class="counter-inherit">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis perferendis, dignissimos dolore 
                                    excepturi delectus voluptate repellat temporibus 
                                    dolores consectetur, unde tempore ratione fugit eum veniam reprehenderit deleniti optio ipsum assumenda.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 causes-grid">
                            <div class="causes-grid-info">
                                <a href="#cause" class="cause-title-wrap">
                                    <p class="title">Old Age Persons </p>
                                    <h4 class="cause-title">Old Age Persons
                                    </h4>
                                </a>
                                <a href="#cause"><img src={blog5} class="img-fuild radius-image-full"
                                        alt=""/></a>
                                <p class="counter-inherit">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis perferendis, dignissimos dolore 
                                    excepturi delectus voluptate repellat temporibus 
                                    dolores consectetur, unde tempore ratione fugit eum veniam reprehenderit deleniti optio ipsum assumenda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* causes-sec */}
            <section class="w3l-aboutblock2" id="story">
                <div class="py-5">
                    <div class="container py-lg-4 py-md-3">
                        <div class="cwp4-two">
                            <div class="cwp4-text">
                                <h3 class="title-big">Why should I care</h3>
                                <ul class="cont-4 mt-4">
                                    <li><span class="fa fa-check"></span>13,40,000 children below 5 die in a year, that is 3,671
                                        under 5 child deaths per day.</li>
                                    <li><span class="fa fa-check"></span>Nearly half of all child deaths under 5 in India are
                                        attributed to undernutrition.</li>
                                    <li><span class="fa fa-check"></span>More than half (56%) of the under 5 deaths occur within the
                                        first 28 days of life, we work to prevent these lives</li>
                                    <li><span class="fa fa-check"></span>India accounts for more than 3 out of 10 stunted children
                                        in the world.</li>
                                    <li><span class="fa fa-check"></span>17.7 million children and adolescents are out of school in
                                        India, this is 14% of world's population of children out of school.</li>
                                    <li><span class="fa fa-check"></span>20% of grade 2 children in India cannot recognize numbers
                                        1-9; 53% of children drop out of school at elementary level.</li>
                                    <li><span class="fa fa-check"></span>49.5% of grade 5 children cannot do subtraction and 55% of
                                        grade 8 children cannot solve 3 digits by 1 digit division problem; 51.09% of grade 5
                                        children cannot read grade 2 English and 25.4% children of grade 8 cannot read grade 2 text.
                                    </li>
                                </ul>
                            </div>
                            <div class="cwp4-text mt-md-5 mt-4">
                                <h3 class="title-big">How you can Help</h3>
                                <ul class="cont-4 mt-4">
                                    <li><span class="fa fa-check"></span>We want to do more and you can help. By committing a small
                                        fraction of your income to protect children in need, you can help save a child and
                                        contribute to humanity. You can donate as low as INR 500 per month.</li>
                                    <li><span class="fa fa-check"></span> While Save the Children appreciates monthly donations more
                                        where you choose to donate a small
                                        fixed amount monthly for us to be able to plan our programs for longer term, a single
                                        donation
                                        can also help save a child.</li>
                                    <li><span class="fa fa-check"></span>You will get your tax exemption certificate within 15 days
                                        of your one time donation (quarterly in case of regular donors, who pledge monthly
                                        donations, after their first month’s donation). You will get quarterly updates on how you
                                        are making a difference.</li>
                                </ul>
                                <a href="#donate" class="btn btn-style btn-primary mt-md-4 mt-2"> I Want to donate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Causes;
