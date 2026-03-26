import React from 'react'
import { Link } from 'react-router-dom'


import team8 from './../../assets/team-31.jpg'
import team9 from './../../assets/team-32.jpg'
import team10 from './../../assets/team-33.jpg'
import propertyimg from '../../assets/about-properties-2.jpg';


function Agents() {
    return (
        <>
            <div className="container page-section my-5 mt-4 fs-5">
                <Link to='/' className="text-decoration-none">Home</Link> &nbsp; &gt; &nbsp; <span className='text-muted'>Agents</span>
            </div>
            <div className="container agent my-5">
                <h2 className="fw-bold">Agents</h2>
                <div className="row align-items-start">
                    <div className="col-lg-9 mt-4">
                        <div className="agent-card mb-4 p-3 d-flex flex-row align-items-center">
                            <img src={team8} className='me-4' alt="Agent Image" />
                            <div>
                                <h5 className="mb-0">Nathan James <i className="fas fa-check"></i></h5>
                                <small>Company Agent at The <span>James EState Agent</span></small>
                                <hr />
                                <div className="agent-section">
                                    <div className="agent-detail">
                                        <div className="agent-icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="agent-text">
                                            <h4 className="mb-0">Office</h4>
                                            <p>+1 864-654-7766</p>
                                        </div>
                                    </div>
                                    <div className="agent-detail">
                                        <div className="agent-icon">
                                            <i className="fas fa-mobile-alt"></i>
                                        </div>
                                        <div className="agent-text">
                                            <h4 className="mb-0">Mobile</h4>
                                            <p>+1 657-876-8776</p>
                                        </div>
                                    </div>
                                    <div className="agent-detail">
                                        <div className="agent-icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="agent-text">
                                            <h4 className="mb-0">Email</h4>
                                            <p>robot@homesthemes.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="agent-content d-flex justify-content-between">
                                    <div className="mt-2 agent-social-icon d-flex gap-2">
                                        <i className="fab fa-facebook"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-linkedin"></i>
                                        <i className="fab fa-instagram"></i>
                                        <i className="fab fa-pinterest"></i>
                                    </div>
                                    <div className="mt-2">
                                        <a>4 Listed Properties <i className="fa-solid fa-caret-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="agent-card mb-4 p-3 d-flex flex-row align-items-center">
                            <img src={team9} className='me-4' alt="Agent Image" />
                            <div>
                                <h5 className="mb-0">Melissa Williams</h5>
                                <small>Company Agent at The <span>Melissa Estate Agent</span></small>
                                <hr />
                                <div className="agent-section">
                                    <div className="agent-detail">
                                        <div className="agent-icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="agent-text">
                                            <h4 className="mb-0">Office</h4>
                                            <p>+1 864-654-7766</p>
                                        </div>
                                    </div>
                                    <div className="agent-detail">
                                        <div className="agent-icon">
                                            <i className="fas fa-mobile-alt"></i>
                                        </div>
                                        <div className="agent-text">
                                            <h4 className="mb-0">Mobile</h4>
                                            <p>+1 657-876-8776</p>
                                        </div>
                                    </div>
                                    <div className="agent-detail">
                                        <div className="agent-icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="agent-text">
                                            <h4 className="mb-0">Email</h4>
                                            <p>robot@homesthemes.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="agent-content d-flex justify-content-between">
                                    <div className="mt-2 agent-social-icon d-flex gap-2">
                                        <i className="fab fa-facebook"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-linkedin"></i>
                                        <i className="fab fa-instagram"></i>
                                        <i className="fab fa-pinterest"></i>
                                    </div>
                                    <div className="mt-2">
                                        <a>4 Listed Properties
                                             <i className="fa-solid fa-caret-right"></i>
                                             </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="agent-card mb-4 p-3 d-flex flex-row align-items-center">
                            <img src={team10} className='me-4' alt="Agent Image" />
                            <div>
                                <h5 className="mb-0">Alice Brian <i className="fas fa-check"></i></h5>
                                <small>Company Agent at The <span>Alice Estate Agent</span></small>
                                <hr />
                                <div className="agent-section">
                                    <div className="agent-detail">
                                        <div className="agent-icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="agent-text">
                                            <h4 className="mb-0">Office</h4>
                                            <p>+1 864-654-7766</p>
                                        </div>
                                    </div>
                                    <div className="agent-detail">
                                        <div className="agent-icon">
                                            <i className="fas fa-mobile-alt"></i>
                                        </div>
                                        <div className="agent-text">
                                            <h4 className="mb-0">Mobile</h4>
                                            <p>+1 657-876-8776</p>
                                        </div>
                                    </div>
                                    <div className="agent-detail">
                                        <div className="agent-icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="agent-text">
                                            <h4 className="mb-0">Email</h4>
                                            <p>robot@homesthemes.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="agent-content d-flex justify-content-between">
                                    <div className="mt-2 agent-social-icon d-flex gap-2">
                                        <i className="fab fa-facebook"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-linkedin"></i>
                                        <i className="fab fa-instagram"></i>
                                        <i className="fab fa-pinterest"></i>
                                    </div>
                                    <div  className="mt-2">
                                        <a>4 Listed Properties 
                                            <i className="fa-solid fa-caret-right"></i>
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="col-lg-3">
                        <div className="mb-5 hide-elm sm">
                            <h5 className="fw-bold">Featured Properties</h5>
                            <div className="property-card rounded-4 p-3 mt-3">
                                <div className="mb-2">
                                    <h6 className="fw-bold mb-1">Villa In Coral Gables</h6>
                                    <p className="text-muted m-0" style={{ fontSize: "0.85rem" }}>
                                        <i className="ri-map-pin-line me-1"></i>
                                        Deering By Drive, Coral Gables, FL 33158, USA
                                    </p>
                                </div>
                                <div className="image-container agent-right-img position-relative rounded-4 overflow-hidden mb-3" style={{ height: 'auto' }}>
                                        <img src={propertyimg} className='img-fluid w-100' alt="property" />
                                    <div className="badge-wrapper d-flex gap-1 position-absolute top-0 start-0 m-2">
                                        <span className="badge bg-primary">For Sale</span>
                                        <span className="badge bg-secondary">Featured</span>
                                    </div>
                                    <span className="build-year position-absolute top-0 end-0 m-2 text-white small">
                                        Build 2024
                                    </span>
                                    <div className="icons position-absolute bottom-0 end-0 m-2 d-flex gap-2">
                                        <i className="ri-heart-line text-white fs-5"></i>
                                        <i className="share-line text-white fs-5"></i>
                                    </div>
                                </div>
                                <p className="fw-bold text-primary mb-0">$825,000</p>
                            </div>
                        </div>
                     
                        <div className="hide-eln">
                            <h5 className="fw-bold">Property Type</h5>
                            <div className="row mt-3">
                                {["Apartment", "Apartment Building", "Office", "Shop", "Single Family", "Villa"].map((type, idx) => (
                                    <div className="col-6 mb-2" key={idx}>
                                        <i className="ri-arrow-right-s-line text-primary me-1"></i>
                                        <span>{type}</span>
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

export default Agents