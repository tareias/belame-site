import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// import {} from 'react-router-dom'



class Header4 extends Component {


    render() {
        return (
            <>
                <header className="site-header header-transparent header mo-left header-seo" id="topo">
                    <div className="top-bar">
                        <div className="container">
                            <div className="row d-flex justify-content-end">
                                <div className="dlab-topbar-right">
                                    <ul>
                                        <li><i className="ti-email m-r5"></i> belame@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar clearfix">
                            <div className="container clearfix">

                                <div className="logo-header mostion">
                                    <Link to={'./'} className="dez-page"><img src="images/logo.svg" alt="" /></Link>
                                </div>

                                <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                
                                <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                                    <ul className="nav navbar-nav">
                                        <li><Link to={'#'}>Belame <i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link to={'./#sobre'} className="dez-page">Quem somos</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li><Link to={'#'}>Nossos Produtos <i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link to={'./#nossos-produtos'} className="dez-page">Extreme Organic</Link></li>
                                                <li><Link to={'./#nossos-produtos'} className="dez-page">Plastic Liss Gloss</Link></li>
                                                <li><Link to={'./#nossos-produtos'} className="dez-page">Broto de Bambu</Link></li>
                                                <li><Link to={'./#nossos-produtos'} className="dez-page">B'TOXX Capilar</Link></li>
                                                <li><Link to={'./#nossos-produtos'} className="dez-page">SOS Capilar</Link></li>

                                            </ul>
                                        </li>
                                        <li><Link to={'#'}>Passo a Passo <i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                            <li><Link to={'./#passoapasso'} className="dez-page">Extreme Organic</Link></li>
                                            <li><Link to={'./#passoapasso'} className="dez-page">Plastic Liss Gloss</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to={'./#contato'}>Contato</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
export default Header4;