import React from 'react';
import { Link } from 'react-router-dom';
import WhyChooseImg1 from '../../assets/images/resources/why-choose-one-img-1.jpg';

const WhyChoose = () => {
    return (
        <>
            {/* Why Choose One Start */}
            <section className="why-choose-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="why-choose-one__left">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Why Choose JK Digital SolutionsHub?</span>
                                    </div>
                                    <h2 className="section-title__title">
                                    Web Development & Design:
                                    </h2>
                                </div>
                                <p className="why-choose-one__text">
                                At JK Digital SolutionsHub, we are committed to delivering innovative, tailored, and results-driven digital solutions that empower businesses to thrive in today’s competitive landscape. Here’s why we stand out as your trusted partner:{" "}
                                </p>
                                <div className="why-choose-one__btn-box">
                                    <Link to="/about" className="thm-btn why-choose-one__btn">
                                        Read more
                                        <span />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="why-choose-one__right">
                                <div className="why-choose-one__img wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <img src={WhyChooseImg1} alt="Why Choose Us" />
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Choose One End */}
        </>
    );
}

export default WhyChoose;
