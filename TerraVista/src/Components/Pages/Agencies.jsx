import React from 'react'


import agencies1 from './../../assets/agencies-bg1.png'
import agencies2 from './../../assets/agencies-bg2.png'
import propaertyimg from '../../assets/about-properties-2.jpg';

import { Link } from 'react-router-dom'
function Agencies() {
    return (
        <>
            <div className="container page-section my-5 mt-4 fs-5">
                <Link to="/" className='text-decoration-none'>Home</Link> &nbsp; &gt; &nbsp; <span className='text-muted'>Agencies</span>
            </div>
            <div className="container agencies my-5">
                <h2 className="fw-bold">Agencies</h2>
                <div className="row">
                   <div className="col-12 col-md-8 mt-4">
                        <div className="agencies-card mb-4 p-3 d-flex flex-row align-items-center">
                            <img src={agencies1} className="me-4 " alt=""  />
                            <div>
                                <h5 className="mb-1">James Estate Agency</h5>
                                <small>James Estate Agents is a distinguished real...</small>
                                <hr />
                                <div className="agencies-section">
                                    <div className="agencies-detail">
                                        <div className="agencies-icons">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="agencies-text">
                                            <h4 className="mb-0">Office</h4>
                                            <p>+1 456-7698-8888</p>
                                        </div>
                                    </div>
                                    <div className="agencies-detail">
                                        <div className="agencies-icons">
                                            <i className="fa fa-mobile-alt"></i>
                                        </div>
                                        <div className="agencies-text">
                                            <h4 className="mb-0">Mobile</h4>
                                            <p>+1 767-766-54444</p>
                                        </div>
                                    </div>
                                    <div className="agencies-detail">
                                        <div className="agencies-icons">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="agencies-text">
                                            <h4 className='mb-0'>Email</h4>
                                            <p>robot@homesthemes.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="agencies-content d-flex justify-content-between">
                                    <div className="mt-2 agencies-social-icon d-flex gap-3">
                                        <i className="fab fa-facebook"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-linkedin"></i>
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                    <div className="mt-2">
                                        <a>Listed Properties</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="agencies-card mb-4 p-3 d-flex flex-row align-items-center">
                            <img src={agencies2} className="me-4 " alt="" />
                            <div>
                                <h5 className="mb-1">Melissa Estate Agency <i className="fas fa-check"></i></h5>
                                <small>Melissa Estate Agents is a premier real...</small>
                                <hr />
                                <div className="agencies-section">
                                    <div className="agencies-detail">
                                        <div className="agencies-icons">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="agencies-text">
                                            <h4 className="mb-0">Office</h4>
                                            <p>+1 456-7858-7588</p>
                                        </div>
                                    </div>
                                    <div className="agencies-detail">
                                        <div className="agencies-icons">
                                            <i className="fa fa-mobile-alt"></i>
                                        </div>
                                        <div className="agencies-text">
                                            <h4 className="mb-0">Mobile</h4>
                                            <p>+1 767-776-5884</p>
                                        </div>
                                    </div>
                                    <div className="agencies-detail">
                                        <div className="agencies-icons">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="agencies-text">
                                            <h4 className='mb-0'>Email</h4>
                                            <p>robot@homesthemes.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="agencies-content d-flex justify-content-between">
                                    <div className="mt-2 agencies-social-icon d-flex gap-3">
                                        <i className="fab fa-facebook"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-linkedin"></i>
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                    <div className="mt-2">
                                        <a>Listed Properties</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mb-5 mt-4 hide-elm-sm">
                            <h5 className="fw-bold">Featured Properties</h5>
                            <div className="property-card rounded-4 p-3 mt-3">
                                <div className="mb-2">
                                    <h6 className="fw-bold mb-1">Villa in Coral Gables</h6>
                                    <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                                        <i className="ri-map-pin-line me-1">
                                            Deering Bay Drive, Coral Gables, FL 33645, USA
                                        </i>
                                    </p>
                                </div>
                                <div className="image-container agent-right-img position-relative rounded-4 overflow-hidden mb-3">
                                    <img src={propaertyimg} alt="" className='"img-fluid w-100' />
                                    <div className="badge-wrapper d-flex gap-1 position-absolute top-0 start-0 m-2">
                                        <span className="badge bg-primary">For Sale</span>
                                        <span className="badge bg-secondary">Featured</span>
                                    </div>
                                    <span className="build-year position-absolute top-0 end-0 m-2 text-white small">
                                        Build 2022
                                    </span>
                                    <div className="icons-position-absolute bottom-0 end-0 m-2 d-flex gap-2">
                                        <i className="ri-heart-line text-white fs-5"></i>
                                        <i className="ri-share-line text-white fs-5"></i>
                                    </div>
                                </div>
                                <p className="fw-bold text-primary mb-0">$825,000</p>
                            </div>
                        </div>
                       
                        <div className="hide-elm">
                            <h5 className="fw-bold">Property Types</h5>
                            <div className="row mt-3">
                                {[
                                    "Apartment", "Apartment Building", "Office", "Shop", "Single Family", "Villa"
                                ].map((type, idx) => (
                                    <div className="col-6 mb-2" key={idx}>
                                        <i className="ri-arrow-right-s-line text-primary me-1">
                                            <span>{type}</span>
                                        </i>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Agencies