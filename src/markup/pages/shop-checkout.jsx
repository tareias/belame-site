import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class ShopCheckout extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr1.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Checkout</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Checkout</li>
                                    </ul>
                                </div>
                                {/* <!-- Breadcrumb row END --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div>
                                <form className="shop-form row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                        <h4>Billing & Shipping Address</h4>
                                        <div className="form-group">
                                            <select>
                                                <option value="">Åland Islands</option>
                                                <option value="">Afghanistan</option>
                                                <option value="">Albania</option>
                                                <option value="">Algeria</option>
                                                <option value="">Andorra</option>
                                                <option value="">Angola</option>
                                                <option value="">Anguilla</option>
                                                <option value="">Antarctica</option>
                                                <option value="">Antigua and Barbuda</option>
                                                <option value="">Argentina</option>
                                                <option value="">Armenia</option>
                                                <option value="">Aruba</option>
                                                <option value="">Australia</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Company Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Address" />
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Apartment, suite, unit etc." />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Town / City" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="State / County" />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Postcode / Zip" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <h6><button className="site-button-link" type="button" data-toggle="collapse" data-target="#create-an-account">Create an account <i className="fa fa-arrow-circle-o-down"></i></button></h6>
                                        <div id="create-an-account" className="collapse">
                                            <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                        <h4 className="font-weight-600"><button className="site-button-link " type="button" data-toggle="collapse" data-target="#different-address">Ship to a different address <i className="fa fa-arrow-circle-o-down"></i></button></h4>
                                        <div id="different-address" className="collapse">
                                            <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>
                                            <div className="form-group">
                                                <select>
                                                    <option value="">Åland Islands</option>
                                                    <option value="">Afghanistan</option>
                                                    <option value="">Albania</option>
                                                    <option value="">Algeria</option>
                                                    <option value="">Andorra</option>
                                                    <option value="">Angola</option>
                                                    <option value="">Anguilla</option>
                                                    <option value="">Antarctica</option>
                                                    <option value="">Antigua and Barbuda</option>
                                                    <option value="">Argentina</option>
                                                    <option value="">Armenia</option>
                                                    <option value="">Aruba</option>
                                                    <option value="">Australia</option>
                                                </select>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-lg-6">
                                                    <input type="text" className="form-control" placeholder="First Name" />
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <input type="text" className="form-control" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Company Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Address" />
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-lg-6">
                                                    <input type="text" className="form-control" placeholder="Apartment, suite, unit etc." />
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <input type="text" className="form-control" placeholder="Town / City" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-lg-6">
                                                    <input type="text" className="form-control" placeholder="State / County" />
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <input type="text" className="form-control" placeholder="Postcode / Zip" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-lg-6">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <input type="text" className="form-control" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="dlab-divider bg-gray-dark text-gray-dark icon-center"><i className="fa fa-circle bg-white text-gray-dark"></i></div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4>Your Order</h4>
                                    <table className="table-bordered check-tbl">
                                        <thead className="text-center">
                                            <tr>
                                                <th>IMAGE</th>
                                                <th>PRODUCT NAME</th>
                                                <th>TOTAL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src="images/product/thumb3.jpg" alt="" /></td>
                                                <td>Prduct Item 3</td>
                                                <td className="product-price">$28.00</td>
                                            </tr>
                                            <tr>
                                                <td><img src="images/product/thumb2.jpg" alt="" /></td>
                                                <td>Prduct Item 4</td>
                                                <td className="product-price">$36.00</td>
                                            </tr>
                                            <tr>
                                                <td><img src="images/product/thumb1.jpg" alt="" /></td>
                                                <td>Prduct Item 5</td>
                                                <td className="product-price">$28.00</td>
                                            </tr>
                                            <tr>
                                                <td><img src="images/product/thumb4.jpg" alt="" /></td>
                                                <td>Prduct Item 2</td>
                                                <td className="product-price">$36.00</td>
                                            </tr>
                                            <tr>
                                                <td><img src="images/product/thumb1.jpg" alt="" /></td>
                                                <td>Prduct Item 1</td>
                                                <td className="product-price">$28.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-6">
                                    <form className="shop-form">
                                        <h4>Order Total</h4>
                                        <table className="table-bordered check-tbl">
                                            <tbody>
                                                <tr>
                                                    <td>Order Subtotal</td>
                                                    <td className="product-price">$125.96</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping</td>
                                                    <td>Free Shipping</td>
                                                </tr>
                                                <tr>
                                                    <td>Coupon</td>
                                                    <td className="product-price">$28.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Total</td>
                                                    <td className="product-price-total">$506.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h5>Payment Method</h5>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name on Card" />
                                        </div>
                                        <div className="form-group">
                                            <select>
                                                <option value="">Credit Card Type</option>
                                                <option value="">Another option</option>
                                                <option value="">A option</option>
                                                <option value="">Potato</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Credit Card Number" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Card Verification Number" />
                                        </div>
                                        <div className="form-group">
                                            <button className="site-button button-lg btn-block" type="button">Place Order Now </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product END --> */}
                    </div>
                    <div className="section-full p-t50 p-b20 bg-primary-dark text-white shop-action">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="icon-bx-wraper left m-b30">
                                        <div className="icon-md text-black radius">
                                            <a href="#" className="icon-cell text-white"><i className="fa fa-gift"></i></a>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">Free shipping on orders $60+</h5>
                                            <p>Order more than 60$ and you will get free shippining Worldwide. More info.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="icon-bx-wraper left m-b30">
                                        <div className="icon-md text-black radius">
                                            <a href="#" className="icon-cell text-white"><i className="fa fa-plane"></i></a>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">Worldwide delivery</h5>
                                            <p>We deliver to the following countries: USA, Canada, Europe, Australia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="icon-bx-wraper left m-b30">
                                        <div className="icon-md text-black radius">
                                            <a href="#" className="icon-cell text-white"><i className="fa fa-history"></i></a>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">60 days money back guranty!</h5>
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
export default ShopCheckout;