import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            <div className="container page-section my-5 mt-4 fs-5">
                <Link to="/" className='text-decoration-none'>Home</Link> &nbsp; &gt; &nbsp; <span className='text-muted'>Contact</span>
            </div>
            <section className="contact py-5">
                <div className="container">
                    <h2>Contact</h2>
                    <div className="col-lg-12">
                        <iframe
                            className='map mt-4'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7247624.926052094!2d-89.09599457830056!3d27.504127157495095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sng!4v1773470980394!5m2!1sen!2sng"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: "30px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className="container con-page-info text-center">
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="contact-icon">
                                <i className="bi bi-phone"></i>
                            </div>
                            <p className="mb-0">+1-675-786-8987</p>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="contact-icon">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <p className="mb-0">2022 Grand Ave, Coconut Grove, Merrick way, FL 332565</p>
                            <hr />
                        </div>
                        <div className="col-md-4">
                            <div className="contact-icon">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <p className="mb-0">sales@terravista.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container my-5 d-flex align-items-center justify-content-center">
                <div className="col-lg-8 con-page">
                    <form className="contact-form">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <div className="input-group">
                                    <input type="text" className='form-control' placeholder='Your Name' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-lale">Phone</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder='Your Phone' />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-lable">Email</label>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder='Your Email' />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-lable">Message</label>
                            <div className="input-group">
                                <textarea className="form-control" rows={4} placeholder='Your Message'></textarea>
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="gdprCheck" required />
                            <label className="form-check-lable" htmlFor="gdprCheck">
                                I connect to having this website store my submitted information so they can respond to my inquiry.
                            </label>
                        </div>
                        <button type="submit" className="sub-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact