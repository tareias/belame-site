import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class Register extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div class="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div class="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr6.jpg' + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Register</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Register</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div class="section-full content-inner shop-account">
                        {/* <!-- Product --> */}
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h2 class="font-weight-700 m-t0 m-b30">Create An Account</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 m-b30">
                                    <div class="p-a30 border-1  max-w500 m-auto">
                                        <div class="tab-content">
                                            <form id="login" class="tab-pane active">
                                                <h4 class="font-weight-700">PERSONAL INFORMATION</h4>
                                                <p class="font-weight-600">If you have an account with us, please log in.</p>
                                                <div class="form-group">
                                                    <label class="font-weight-700">First Name *</label>
                                                    <input name="dzName" required="" class="form-control" placeholder="First Name" type="text" />
                                                </div>
                                                <div class="form-group">
                                                    <label class="font-weight-700">Last Name *</label>
                                                    <input name="dzName" required="" class="form-control" placeholder="Last Name" type="text" />
                                                </div>
                                                <div class="form-group">
                                                    <label class="font-weight-700">E-MAIL *</label>
                                                    <input name="dzName" required="" class="form-control" placeholder="Your Email Id" type="email" />
                                                </div>
                                                <div class="form-group">
                                                    <label class="font-weight-700">PASSWORD *</label>
                                                    <input name="dzName" required="" class="form-control " placeholder="Type Password" type="password" />
                                                </div>
                                                <div class="text-left">
                                                    <button class="site-button button-lg radius-no outline outline-2">CREATE</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product END --> */}
                    </div>
                    <div class="section-full p-t50 p-b20 bg-primary-dark text-white shop-action">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                    <div class="icon-bx-wraper left m-b30">
                                        <div class="icon-md text-black radius">
                                            <a href="#" class="icon-cell text-white"><i class="fa fa-gift"></i></a>
                                        </div>
                                        <div class="icon-content">
                                            <h5 class="dlab-tilte">Free shipping on orders $60+</h5>
                                            <p>Order more than 60$ and you will get free shippining Worldwide. More info.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                    <div class="icon-bx-wraper left m-b30">
                                        <div class="icon-md text-black radius">
                                            <a href="#" class="icon-cell text-white"><i class="fa fa-plane"></i></a>
                                        </div>
                                        <div class="icon-content">
                                            <h5 class="dlab-tilte">Worldwide delivery</h5>
                                            <p>We deliver to the following countries: USA, Canada, Europe, Australia</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                    <div class="icon-bx-wraper left m-b30">
                                        <div class="icon-md text-black radius">
                                            <a href="#" class="icon-cell text-white"><i class="fa fa-history"></i></a>
                                        </div>
                                        <div class="icon-content">
                                            <h5 class="dlab-tilte">60 days money back guranty!</h5>
                                            <p>Not happy with our product, feel free to return it, we will refund 100% your money!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- contact area  END --> */}
                </div>

                <Footer1 />
            </>
        )
    }
}
export default Register;