import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header4 from '../layout/header4';
import Footer5 from '../layout/footer5';

class Lissgloss extends Component {


    render() {
        return (
            <>
                <Header4 />


{/* <!-- ELement Style  6 --> */}
<div className="section-full content-inner about-us-box bg-white">
<br></br><br></br><br></br><br></br>
                            {/* <div className="sort-title-bx" data-name="Element Style 6"><i className="fa fa-angle-double-right"></i></div> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="dlab-box-bg m-b30 box-hover fly-box" style={{ backgroundImage: "url(" + './images/passos/ENSABOAR.png' + ")" }}>
                                            <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                    <span className="icon-cell icon-xxl"><img src="./images/passos/ENSABOAR.png"></img></span>
                                                <div className="icon-content m-b20">
                                                    <h5 className="dlab-tilte">Passo 01</h5>
                                                    <p>Lave com o <b className="text-pink">Shampoo Anti Residuos</b> e deixe agir por 5 minutos e enxague.<br></br><br></br><br></br><br></br></p>
                                                </div>
                                                {/* <a href="#" className="site-button">Read More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="dlab-box-bg m-b30 box-hover fly-box" style={{ backgroundImage: "url(" + './images/passos/SECADOR.png' + ")" }}>
                                            <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                <div className="text-primary">
                                                    <span className="icon-cell icon-xxl"><img src="./images/passos/SECADOR.png"></img></span>
                                                </div>
                                                <div className="icon-content m-b20">
                                                    <h5 className="dlab-tilte">Passo 02</h5>
                                                    <p>Seque os fios 100% e divida o cabelo em 4 partes.<br></br><br></br><br></br><br></br><br></br></p>
                                                </div>
                                                {/* <a href="#" className="site-button">Read More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="dlab-box-bg m-b30 box-hover active fly-box" style={{ backgroundImage: "url(" + './images/passos/APLICACAO.png' + ")" }}>
                                            <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                <div className="text-primary">
                                                    <span className="icon-cell icon-xxl"><img src="./images/passos/APLICACAO.png"></img></span>
                                                </div>
                                                <div className="icon-content m-b20">
                                                    <h5 className="dlab-tilte">Passo 03</h5>
                                                    <p>Aplique o Gloss Anti Frizz respeitando 1 cm do couro cabeludo, iniciando pela nuca até a ultima mecha em todo o cabelo. Deixe agir por 20 minutos.</p>
                                                </div>
                                                {/* <a href="#" className="site-button">Read More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="dlab-box-bg m-b30 box-hover fly-box" style={{ backgroundImage: "url(" + './images/passos/LAVAR.png' + ")" }}>
                                            <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                <div className="text-primary">
                                                    <span className="icon-cell icon-xxl"><img src="./images/passos/SECADOR.png"></img></span>
                                                </div>
                                                <div className="icon-content m-b20">
                                                    <h5 className="dlab-tilte">Passo 04</h5>
                                                    <p>Seque o cabelo com secador Morno. Seque ou escove 100%.<br></br><br></br><br></br><br></br></p>
                                                </div>
                                                {/* <a href="#" className="site-button">Read More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.10s">
                                        <div className="dlab-box-bg m-b30 box-hover fly-box" style={{ backgroundImage: "url(" + './images/passos/LAVAR.png' + ")" }}>
                                            <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                <div className="text-primary">
                                                    <span className="icon-cell icon-xxl"><img src="./images/passos/CHAPINHA.png"></img></span>
                                                </div>
                                                <div className="icon-content m-b20">
                                                    <h5 className="dlab-tilte">Passo 05</h5>
                                                    <p>Pranche em mechas finas de 8 a 12 vezes, após finalizado pode lavar os cabelos apenas com água morna e aplicar um hidratante.<br></br><br></br><br></br><br></br></p>
                                                </div>
                                                {/* <a href="#" className="site-button">Read More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Awesome Services End --> */}


                <Footer5 />
            
            </>
        )
    }
}
export default Lissgloss;