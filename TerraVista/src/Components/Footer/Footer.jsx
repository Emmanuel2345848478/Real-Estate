import React from 'react'

import footerbg from '../../assets/footer-bg.png'

function Footer() {
    return (
        <>

            <div className="footer-wrapper container-fluid position-relative">
                <img src={footerbg} className='img-fluid footer-bg position-absolute' alt="" />
                <div className="container px-5">
                    <div className="logo-text">
                        <h2>Terra Vista</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <p className='footer-text'>Experience the epitome of flexibility and empower your real estate ventures with our feature-rice theme.</p>
                            <p className='footer-text'>Effortlessly adapt to various property types and market demands with our comprehensive solution.</p>
                            <div className="social-icons">
                                <a href="#"><i className="ri-facebook-fill"></i></a>
                                <a href="#"><i className="ri-twitter-fill"></i></a>
                                <a href="#"><i className="ri-instagram-fill"></i></a>
                                <a href="#"><i className="ri-youtube-fill"></i></a>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">

                            <h6 className="footer-heading">Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="#">Home</a></li>
                                 <li><a href="#">Properties Listing</a></li>
                                  <li><a href="#">Agents</a></li>
                                   <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        {/* Search */}
                        <div className="col-md-3 mb-4">
                            <div className="search-box">
                                <input type="text" placeholder='Search....' />
                                    <button>search</button>
                            </div>
                        </div>
                    </div>
                    <div className="contact-help-box">
                        <div className="help-text">Need Help?</div>
                        <div className="help-item"><i className="ri-phone-fill"></i> +1 674-786-63636</div>
                         <div className="help-item"><i className="ri-whatsapp-fill"></i> +1 674-786-63636</div>
                          <div className="help-item"><i className="ri-mail-fill"></i> Terravista968@gmail.com</div>
                    </div>
                    <div className="footer-bottom">
                     <p>© 2026 Terra Vista. All rights reserved by <a href="#">Emmanuel Web</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer