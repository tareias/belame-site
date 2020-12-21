import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';



class ShopColumns extends Component {


    render() {
        return (
            <>
                <Header1 />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + './images/banner/bnr4.jpg' + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Shop Columns</h1>
                                {/* <!-- Breadcrumb row --> */}
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><a href="#">Home</a></li>
                                        <li>Shop Columns</li>
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
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src="images/product/item1.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Checked Short Dress</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="item-box m-b10 item-style-1">
                                        <div className="item-img">
                                            <img src="images/product/item2.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Slim Fit Chinos</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src="images/product/item3.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Dark Brown Boots</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src="images/product/item4.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Light Blue Denim Dress</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src="images/product/item5.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Green Trousers</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="item-box m-b10 item-style-1">
                                        <div className="item-img">
                                            <img src="images/product/item6.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Unisex Sunglasses</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src="images/product/item7.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Blue Round-Neck Tshirt</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src="images/product/item8.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Men Grey Casual Shoes</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src="images/product/item1.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Checked Short Dress</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="item-box m-b10 item-style-1">
                                        <div className="item-img">
                                            <img src="images/product/item2.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Slim Fit Chinos</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src="images/product/item3.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Dark Brown Boots</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src="images/product/item4.jpg" alt="" />
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><a href="#"><i className="ti-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i className="ti-eye"></i></a></li>
                                                    <li><a href="#"><i className="ti-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><a href="#">Light Blue Denim Dress</a></h6>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-half-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
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
                </div>

                <Footer1 />
            </>
        )
    }
}
export default ShopColumns;