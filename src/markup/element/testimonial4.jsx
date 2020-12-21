import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// const options = {
//     items: 1,
// };

class TestimonialCarousel4 extends Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    }
	
	render() {
        return (
            <>

                <OwlCarousel
                    className="owl-theme owl-none owl-dots-none"
                    loop
                    margin={10}
                    nav
                    items={2}
					responsive={this.state.responsive}
                >
                    <div className="item">
                        <div className="testimonial-8">
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
                            </div>
                            <div className="testimonial-detail clearfix">
                                <div className="testimonial-pic radius shadow">
                                    <img src="images/testimonials/pic2.jpg" width="100" height="100" alt="" />
                                </div>
                                <h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5>
                                <span>Client</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-8">
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
                            </div>
                            <div className="testimonial-detail clearfix">
                                <div className="testimonial-pic radius shadow">
                                    <img src="images/testimonials/pic3.jpg" width="100" height="100" alt="" />
                                </div>
                                <h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5>
                                <span>Client</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-8">
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
                            </div>
                            <div className="testimonial-detail clearfix">
                                <div className="testimonial-pic radius shadow">
                                    <img src="images/testimonials/pic2.jpg" width="100" height="100" alt="" />
                                </div>
                                <h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5>
                                <span>Client</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-8">
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
                            </div>
                            <div className="testimonial-detail clearfix">
                                <div className="testimonial-pic radius shadow">
                                    <img src="images/testimonials/pic3.jpg" width="100" height="100" alt="" />
                                </div>
                                <h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5>
                                <span>Client</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-8">
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
                            </div>
                            <div className="testimonial-detail clearfix">
                                <div className="testimonial-pic radius shadow">
                                    <img src="images/testimonials/pic2.jpg" width="100" height="100" alt="" />
                                </div>
                                <h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5>
                                <span>Client</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-8">
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
                            </div>
                            <div className="testimonial-detail clearfix">
                                <div className="testimonial-pic radius shadow">
                                    <img src="images/testimonials/pic3.jpg" width="100" height="100" alt="" />
                                </div>
                                <h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5>
                                <span>Client</span>
                            </div>
                        </div>
                    </div>


                </OwlCarousel>



            </>
        );
    }
}

export default TestimonialCarousel4;