import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import heroimage1 from './../../assets/hero-bg-1.jpg';
import heroimage2 from './../../assets/hero-bg-2.jpg';
import heroimage3 from './../../assets/hero-bg-3.jpg';
import heroicon1 from './../../assets/hero-icon1.png';
import heroicon2 from './../../assets/hero-icon2.png';
import heroicon3 from './../../assets/hero-icon3.png';
import PropertieData from './../../Data.json';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import propIcon1 from './../../assets/prop-icon1.png';
import propIcon2 from './../../assets/prop-icon2.png';
import propIcon3 from './../../assets/prop-icon3.png';
import test1 from './../../assets/team-1.jpg';
import test2 from './../../assets/team-2.jpg';
import test3 from './../../assets/team-3.jpg';
import test4 from './../../assets/team-4.jpg';
import bannerbg from './../../assets/banner-bg.png';
import team from './../../assets/team-21.jpg';
import team2 from './../../assets/team-22.jpg';
import team3 from './../../assets/team-23.jpg';
import team4 from './../../assets/team-24.jpg';
import agentprop1 from './../../assets/agent-properties-1.jpg';
import agentprop2 from './../../assets/agent-properties-2.jpg';
import agentprop3 from './../../assets/agent-properties-3.jpg';
import discover1 from './../../assets/discover-1.jpg';
import discover2 from './../../assets/discover-2.jpg';
import discover3 from './../../assets/discover-3.jpg';
import discover4 from './../../assets/discover-4.jpg';
import news1 from './../../assets/news-1.jpg';
import news2 from './../../assets/news-2.jpg';
import news3 from './../../assets/news-3.jpg';
import news4 from './../../assets/news-4.jpg';
import newsClient from './../../assets/news-client.jpg';
import brand1 from './../../assets/brand-1.png';
import brand2 from './../../assets/brand-2.png';
import brand3 from './../../assets/brand-3.png';
import brand4 from './../../assets/brand-4.png';
import brand5 from './../../assets/brand-5.png';
import { Link } from 'react-router-dom';

function Index() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        Fancybox.bind('[data-fancybox]', {});
        return () => {
            Fancybox.destroy();
        };
    }, []);

    const [likeditems, setLikedItems] = useState([]);
    const toggleLike = (id) => {
        setLikedItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    };

    return (
        <>
            {/* Hero */}
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className='mb-4'
            >
                {[heroimage2, heroimage3, heroimage1].map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="hero-slide-wrapper">
                            <div className="hero-main w-100">
                                <img src={img} alt="" className="hero-img" />
                            </div>
                            <div className="hero-content">
                                <div className="container-fluid px-3">
                                    <div className="hero-info p-3 p-md-5 rounded-4 shadow d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center bg-white">
                                        <div>
                                            <h5 className="mb-1 fs-5 fs-md-4 fw-semibold">
                                                Home in coral Gables
                                                <small className="text-muted ms-2 fs-6 fw-normal">Build 2019</small>
                                            </h5>
                                            <p className="mb-2 text-muted"><strong>Added:</strong> June 8, 2022</p>
                                        </div>
                                        <div className="d-flex gap-3 align-items-center my-2 my-md-0 text-primary">
                                            <div className="d-flex align-items-center text-black">
                                                <img src={heroicon1} alt="" className='hero-icon me-2' /> 4
                                            </div>
                                            <div className="d-flex align-items-center text-black">
                                                <img src={heroicon2} alt="" className='hero-icon me-2' /> 4.5
                                            </div>
                                            <div className="d-flex align-items-center text-black">
                                                <img src={heroicon3} alt="" className='hero-icon me-2' /> 3800 sq ft
                                            </div>
                                        </div>
                                        <div className="hero-sale">
                                            <span className="d-block mb-1 text-muted">For Sale</span>
                                            <h4 className="mb-0 fw-bold fs-4">$850,000</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Properties */}
            <div className="container position-relative py-5">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            try {
                                if (swiper && swiper.params && swiper.navigation) {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }
                            } catch (e) {
                                console.log('nav error', e);
                            }
                        }, 100);
                    }}
                    breakpoints={{
                        1399: { slidesPerView: 3 },
                        991: { slidesPerView: 2 },
                        767: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    }}
                    className='mt-5 py-5'
                >
                    {PropertieData.map((PropData, propIndex) => (
                        <SwiperSlide key={PropData.id}>
                            <div className="property-card card">
                                <div className="property-image position-relative">
                                    <img src={PropData.img} className='img-fluid rounded' alt={PropData.name} />
                                    <div className="property-tags position-absolute">
                                        {Object.values(PropData.tags).slice(0, 3).map((tag, index) => (
                                            <span key={index} className={`span${index + 1}`}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className="property-img-vid position-absolute">
                                        <span style={{ cursor: 'pointer' }} onClick={() => {
                                            const trigger = document.querySelector(`#gallery-trigger-${propIndex}`);
                                            if (trigger) trigger.click();
                                        }}>
                                            <i className="bi bi-camera-fill"></i>&nbsp; {PropData.images}
                                        </span>
                                        <span style={{ cursor: 'pointer' }} onClick={() => {
                                            const videoTrigger = document.querySelector(`#video-trigger-${propIndex}`);
                                            if (videoTrigger) videoTrigger.click();
                                        }}>
                                            <i className="bi bi-film"></i>&nbsp; {PropData.videos}
                                        </span>
                                    </div>
                                    <a id={`video-trigger-${propIndex}`} data-fancybox={`video-${propIndex}`} href={PropData.videoSlide} style={{ display: 'none' }}></a>
                                    <div style={{ display: 'none' }}>
                                        {PropData.imageSlides?.map((img, index) => (
                                            <a key={index}
                                                id={index === 0 ? `gallery-trigger-${propIndex}` : undefined}
                                                data-fancybox={`gallery-${propIndex}`}
                                                href={img}>
                                                <img src={img} alt={`hidden-${index}`} />
                                            </a>
                                        ))}
                                    </div>
                                    <span
                                        className={`liked-property position-absolute ${likeditems.includes(PropData.id) ? 'liked' : ''}`}
                                        onClick={() => toggleLike(PropData.id)}>
                                        <i className="bi bi-heart-fill"></i>
                                    </span>
                                </div>
                                <Link to={`/property/${PropData.id}`} className='text-decoration-none'>
                                    <div className="property-content mt-3 px-3">
                                        <h2>{PropData.name}</h2>
                                        <p><i className="bi bi-geo-alt-fill"></i>{PropData.address}</p>
                                        <h5>{PropData.type}</h5>
                                        <div className="d-flex mt-3 pb-3 justify-content-between align-items-center w-100">
                                            <h3 className='m-0'>{PropData.price}</h3>
                                            <div className="property-detail">
                                                <span><img src={propIcon1} className='img-fluid' alt="" style={{ width: '20px', height: '20px' }} /> 3</span>
                                                <span><img src={propIcon2} className='img-fluid' alt="" style={{ width: '20px', height: '20px' }} /> 3.5</span>
                                                <span><img src={propIcon3} className='img-fluid' alt="" style={{ width: '20px', height: '20px' }} /> 3500 sq ft</span>
                                            </div>
                                        </div>
                                        <p><span>Added:</span>{PropData.data}</p>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div ref={prevRef} className="swiper-buttton-prev swiper-btn swiper-prev">
                    <i className="bi bi-caret-left-fill"></i>
                </div>
                <div ref={nextRef} className="swiper-buttton-next swiper-btn swiper-next">
                    <i className="bi bi-caret-right-fill"></i>
                </div>
            </div>

            {/* About Property */}
            <div className="about-property position-relative">
                <div className="dots-element position-absolute"></div>
                <div className="dots-element2 position-absolute"></div>
                <div className="container mt-5 py-5 position-relative">
                    <Swiper
                        modules={[Navigation, EffectFade]}
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        effect='fade'
                        fadeEffect={{ crossFade: true }}
                    >
                        {PropertieData.slice(0, 4).map((AbpropData) => (
                            <SwiperSlide key={AbpropData.id}>
                                <div className="ap-wrapper row g-0 align-items-center">
                                    <div className="col-12 col-md-6">
                                        <div className="ap-img rounded position-relative">
                                            <img src={AbpropData.apImg} className='img-fluid rounded' alt="" />
                                            <div className="property-img-vid position-absolute">
                                                <span style={{ cursor: 'pointer' }} onClick={() => {
                                                    const trigger = document.querySelector(`#ap-gallery-trigger-${AbpropData.id}`);
                                                    if (trigger) trigger.click();
                                                }}>
                                                    <i className="bi bi-camera-fill"></i>&nbsp; {AbpropData.images}
                                                </span>
                                                <span style={{ cursor: 'pointer' }} onClick={() => {
                                                    const videoTrigger = document.querySelector(`#ap-video-trigger-${AbpropData.id}`);
                                                    if (videoTrigger) videoTrigger.click();
                                                }}>
                                                    <i className="bi bi-film"></i>&nbsp; {AbpropData.videos}
                                                </span>
                                            </div>
                                            <a id={`ap-video-trigger-${AbpropData.id}`} data-fancybox={`ap-video-${AbpropData.id}`} href={AbpropData.videoSlide} style={{ display: 'none' }}></a>
                                            <div style={{ display: 'none' }}>
                                                {AbpropData.imageSlides?.map((img, index) => (
                                                    <a key={index}
                                                        id={index === 0 ? `ap-gallery-trigger-${AbpropData.id}` : undefined}
                                                        data-fancybox={`ap-gallery-${AbpropData.id}`}
                                                        href={img}>
                                                        <img src={img} alt={`hidden-${index}`} />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="ap-content mt-4 d-flex flex-column gap-3">
                                            <div className="property-tags ap-tags">
                                                {Object.values(AbpropData.tags).slice(0, 3).map((tag, index) => (
                                                    <span key={index} className={`span${index + 1}`}>{tag}</span>
                                                ))}
                                            </div>
                                            <h2 className='mt-2 mb-0'>{AbpropData.name}</h2>
                                            <p><i className="bi bi-geo-alt-fill"></i> {AbpropData.address}</p>
                                            <div className="ap-info my-3">
                                                <span><img src={propIcon1} className='img-fluid' alt="" style={{ width: '20px', height: '20px' }} /> 3</span>
                                                <span><img src={propIcon2} className='img-fluid' alt="" style={{ width: '20px', height: '20px' }} /> 3.5</span>
                                                <span><img src={propIcon3} className='img-fluid' alt="" style={{ width: '20px', height: '20px' }} /> 3500 sq ft</span>
                                            </div>
                                            <h1 className='mt-3'>{AbpropData.price}</h1>
                                            <p className="ap-pere">Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters..</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Testimonial */}
            <div className="container py-5 text-center position-relative">
                <h2 className="fw-bold mb-5">Customers Loves Us</h2>
                <Swiper
                    loop={true}
                    navigation={{nextEl: '.testimonial-swiper-next',prevEl: '.testimonial-swiper-prev'
                    }}
                    modules={[Navigation]}
                    className='testimonial-swiper'
                >
                
                        <SwiperSlide>
                            <div className="bg-white rounded p-3 p-md-5 mx-auto" style={{ maxWidth: "900px" }}>
                                <div className="row align-items-center">
                                    <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                                        <div className="test-img mx-auto">
                                            <img src={test1} className='rounded-circle shadow' alt="" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                                        </div>
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <h4 className='text-primary fw-bold mb-3 fs-5 fs-md-2'>
                                            This is genuinely the best theme i have ever bought in terms of super easy & clear instructions to follow.
                                        </h4>
                                        <p className='text-muted mb-3'>I have been a customer for years and have always been impressed with the quality and support.</p>
                                        <h5 className="fw-bold mb-1">Daisybee</h5>
                                        <a href="#" className='text-decoration-underline text-muted'>@daisy</a>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white rounded p-3 p-md-5 mx-auto" style={{ maxWidth: "900px" }}>
                                <div className="row align-items-center">
                                    <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                                        <div className="test-img mx-auto">
                                            <img src={test2} className='rounded-circle shadow' alt="" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                                        </div>
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <h4 className='text-primary fw-bold mb-3 fs-5 fs-md-2'>
                                            This is genuinely the best theme i have ever bought in terms of super easy & clear instructions to follow.
                                        </h4>
                                        <p className='text-muted mb-3'>From inspection to closing, everting was seamless. Truly a premium experience</p>
                                        <h5 className="fw-bold mb-1">Sophia Johnson</h5>
                                        <a href="#" className='text-decoration-underline text-muted'>@sophia</a>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white rounded p-3 p-md-5 mx-auto" style={{ maxWidth: "900px" }}>
                                <div className="row align-items-center">
                                    <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                                        <div className="test-img mx-auto">
                                            <img src={test3} className='rounded-circle shadow' alt="" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                                        </div>
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <h4 className='text-primary fw-bold mb-3 fs-5 fs-md-2'>
                                            This is genuinely the best theme i have ever bought in terms of super easy & clear instructions to follow.
                                        </h4>
                                        <p className='text-muted mb-3'>Top-tier Service!</p>
                                        <h5 className="fw-bold mb-1">Daniel Brown</h5>
                                        <a href="#" className='text-decoration-underline text-muted'>@Brown</a>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white rounded p-3 p-md-5 mx-auto" style={{ maxWidth: "900px" }}>
                                <div className="row align-items-center">
                                    <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                                        <div className="test-img mx-auto">
                                            <img src={test4} className='rounded-circle shadow' alt="" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                                        </div>
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <h4 className='text-primary fw-bold mb-3 fs-5 fs-md-2'>
                                            This is genuinely the best theme i have ever bought in terms of super easy & clear instructions to follow.
                                        </h4>
                                        <p className='text-muted mb-3'>Very Professional and responsive. They understood what i needed ans delivered beyond my expectations.</p>
                                        <h5 className="fw-bold mb-1">Micheal Peters</h5>
                                        <a href="#" className='text-decoration-underline text-muted'>@Micheal</a>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                
                </Swiper>
                    <div className="testimonial-swiper-next "><i className="bi bi-caret-left-fill"></i></div>
                    <div className="testimonial-swiper-prev "><i className="bi bi-caret-right-fill"></i></div>


            </div>


            {/* Banner */}
            <div className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="hero-heading">Finding a perfect property have never been this easy earlier</h1>
                            <p className="hero-subtext">Discover a wide range of properties that suit your needs and preferences.</p>
                        </div>
                        <div className="col-md-4 text-md-end text-start mt-4 mt-md-0">
                            <div className="btn check-button">Check Properties</div>
                        </div>
                    </div>
                    <div className="hero-divider">
                        <div className="row hero-contact text-center text-md-start">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <div className="contact-label">Email</div>
                                <p className="contact-info">Terravista56@gmail.com</p>
                            </div>
                            <div className="col-md-6 mb-3 mb-md-0">
                                <div className="contact-label">Phone Number</div>
                                <p className="contact-info">+1 456 765 87654</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={bannerbg} className='img-fluid position-absolute banner-img' alt="" />
            </div>

            {/* Our Agents */}
            <div className="our-agents py-5 my-5 position-relative">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="agents-title col-lg-6">
                            <h2>Meet Our Agents</h2>
                        </div>
                        <div className="agents-btn col-lg-6 d-flex justify-content-end">
                            <button className='btn btn1'>View All</button>
                        </div>
                    </div>
                </div>
                <div className="agents-swiper mt-5">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        modules={[Navigation]}
                        navigation={{nextEl: '.swiper-next', prevEl: '.swiper-prev'
                        }}
                        breakpoints={{
                            1399: { slidesPerView: 3 },
                            991: { slidesPerView: 2 },
                            575: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}
                    >

                        {/* slide 1 */}
                        <SwiperSlide>
                            <div className="agents-card d-flex flex-column gap-2 shadow-sm border rounded p-3">
                                <div className="agent-info d-flex align-items-center gap-3">
                                    <div className="agents-img">
                                        <img src={team} className='img-fluid' alt="" />
                                    </div>
                                    <div className="agent-dot">
                                        <h2>Alice Brian</h2>
                                        <p>Alice Brian Agency</p>
                                    </div>
                                </div>
                                <div className="agent-gallery mt-3">
                                    <div className="agent-gallery-col d-flex gap-3">
                                        <img src={agentprop1} className='img-fluid rounded' alt="" />
                                        <img src={agentprop2} className='img-fluid rounded' alt="" />
                                        <img src={agentprop3} className='img-fluid rounded' alt="" />
                                    </div>
                                    <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                                        <button className='btn btn1'>View Profile</button>
                                        <a href="#">3 Listed Properties</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slide 2 */}
                        <SwiperSlide>
                            <div className="agents-card d-flex flex-column gap-2 shadow-sm border rounded p-3">
                                <div className="agent-info d-flex align-items-center gap-3">
                                    <div className="agents-img">
                                        <img src={team2} className='img-fluid' alt="" />
                                    </div>
                                    <div className="agent-dot">
                                        <h2>Melissa Williams</h2>
                                        <p>Melissa William Agency</p>
                                    </div>
                                </div>
                                <div className="agent-gallery mt-3">
                                    <div className="agent-gallery-col d-flex gap-3">
                                        <img src={agentprop1} className='img-fluid rounded' alt="" />
                                        <img src={agentprop2} className='img-fluid rounded' alt="" />
                                        <img src={agentprop3} className='img-fluid rounded' alt="" />
                                    </div>
                                    <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                                        <button className='btn btn1'>View Profile</button>
                                        <a href="#">3 Listed Properties</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slide 3 */}
                        <SwiperSlide>
                            <div className="agents-card d-flex flex-column gap-2 shadow-sm border rounded p-3">
                                <div className="agent-info d-flex align-items-center gap-3">
                                    <div className="agents-img">
                                        <img src={team3} className='img-fluid' alt="" />
                                    </div>
                                    <div className="agent-dot">
                                        <h2>Nathan James</h2>
                                        <p>Nathan James Agency</p>
                                    </div>
                                </div>
                                <div className="agent-gallery mt-3">
                                    <div className="agent-gallery-col d-flex gap-3">
                                        <img src={agentprop1} className='img-fluid rounded' alt="" />
                                        <img src={agentprop2} className='img-fluid rounded' alt="" />
                                        <img src={agentprop3} className='img-fluid rounded' alt="" />
                                    </div>
                                    <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                                        <button className='btn btn1'>View Profile</button>
                                        <a href="#">3 Listed Properties</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slide 4 */}
                        <SwiperSlide>
                            <div className="agents-card d-flex flex-column gap-2 shadow-sm border rounded p-3">
                                <div className="agent-info d-flex align-items-center gap-3">
                                    <div className="agents-img">
                                        <img src={team4} className='img-fluid' alt="" />
                                    </div>
                                    <div className="agent-dot">
                                        <h2>John David</h2>
                                        <p>John David Agency</p>
                                    </div>
                                </div>
                                <div className="agent-gallery mt-3">
                                    <div className="agent-gallery-col d-flex gap-3">
                                        <img src={agentprop1} className='img-fluid rounded' alt="" />
                                        <img src={agentprop2} className='img-fluid rounded' alt="" />
                                        <img src={agentprop3} className='img-fluid rounded' alt="" />
                                    </div>
                                    <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                                        <button className='btn btn1'>View Profile</button>
                                        <a href="#">3 Listed Properties</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                     <div className="swiper-prev "><i className="bi bi-caret-left-fill"></i></div>
                    <div className="swiper-next "><i className="bi bi-caret-right-fill"></i></div>
                </div>
            </div>

            {/* Discover Properties */}
            <div className="discover-propertie py-5">
                <div className="container">
                    <div className="row">
                        <div className="dis-prop-head">
                            <h2>Discover Properties</h2>
                            <p>Find Properties In Your Favourite Cities</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {[
                            { img: discover1, city: 'Miami', count: 7 },
                            { img: discover2, city: 'Coral Gables', count: 2 },
                            { img: discover3, city: 'Doral', count: 1 },
                            { img: discover4, city: 'Little Mavana', count: 2 },
                        ].map((place, i) => (
                            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 dis-prop-col rounded" key={i}>
                                <div className="dist-prop-img position-relative">
                                    <img src={place.img} className='img-fluid rounded' alt="" />
                                    <div className="dis-prop-content text-center rounded position-absolute">
                                        <span>{place.city}</span>
                                        <h2>{place.count}</h2>
                                        <p className="m-0 text-muted">Properties</p>
                                    </div>
                                    <button className="btn dis-prop-btn position-absolute">View All <i className="bi bi-caret-right-fill"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Latest News */}
            <div className="latest-news py-5 my-5 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="dist-prop-head">
                            <p>Latest News & Update</p>
                            <h2>Latest News About Real Estate</h2>
                        </div>
                    </div>
                    <div className="row mt-5 w-100">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            modules={[Navigation]}
                            navigation={{ nextEl: '.news-swiper-next', prevEl: '.news-swiper-prev' }}
                            breakpoints={{
                                1399: { slidesPerView: 3 },
                                991: { slidesPerView: 2 },
                                575: { slidesPerView: 1 },
                                0: { slidesPerView: 1 },
                            }}
                            className='news-swiper'
                        >
                          
                                <SwiperSlide>
                                    <div className="news-card">
                                        <div className="news card-img position-relative">
                                            <img src={news1} className='img-fluid rounded' alt="" />
                                            <div className="news-client-info d-flex align-items-center position-absolute">
                                                <img src={newsClient} className='img-fluid rounded-circle' alt="" />
                                                <p className='ms-2'>By Erick Johnson</p>
                                            </div>
                                        </div>
                                        <div className="news-card-content mt-3">
                                            <p>June 15, 2024</p>
                                            <h5>As the real estate market heats up, here's how first-time buyers can keep their cool</h5>
                                            <a href="#">Luxury</a>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="news-card">
                                        <div className="news card-img position-relative">
                                            <img src={news2} className='img-fluid rounded' alt="" />
                                            <div className="news-client-info d-flex align-items-center position-absolute">
                                                <img src={newsClient} className='img-fluid rounded-circle' alt="" />
                                                <p className='ms-2'>By Nestify Realty</p>
                                            </div>
                                        </div>
                                        <div className="news-card-content mt-3">
                                            <p>December 15, 2024</p>
                                            <h5>Interest rates easing - more buyers.</h5>
                                            <a href="#">Luxury</a>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="news-card">
                                        <div className="news card-img position-relative">
                                            <img src={news3} className='img-fluid rounded' alt="" />
                                            <div className="news-client-info d-flex align-items-center position-absolute">
                                                <img src={newsClient} className='img-fluid rounded-circle' alt="" />
                                                <p className='ms-2'>By JD Property Group</p>
                                            </div>
                                        </div>
                                        <div className="news-card-content mt-3">
                                            <p>March 10, 2025</p>
                                            <h5>There's still a global housing shortage, especially in major countries.</h5>
                                            <a href="#">Luxury</a>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="news-card">
                                        <div className="news card-img position-relative">
                                            <img src={news4} className='img-fluid rounded' alt="" />
                                            <div className="news-client-info d-flex align-items-center position-absolute">
                                                <img src={newsClient} className='img-fluid rounded-circle' alt="" />
                                                <p className='ms-2'>By UrbanNest</p>
                                            </div>
                                        </div>
                                        <div className="news-card-content mt-3">
                                            <p>June 15, 2024</p>
                                            <h5>Home Sales could increase significantly (some forecasts says up to 14% growth)</h5>
                                            <a href="#">Luxury</a>
                                        </div>
                                    </div>
                                </SwiperSlide> 
                        </Swiper>
                        <div className="news-swiper-prev new-swiper-btn swiper-btn"><i className="bi bi-caret-left-fill"></i></div>
                        <div className="news-swiper-next new-swiper-btn swiper-btn"><i className="bi bi-caret-right-fill"></i></div>
                    </div>
                </div>
            </div>

            {/* Brands */}
            <div className="container-fluid">
                <div className="container py-5">
                    <h2><strong>Partners of TerraVista</strong></h2>
                    <p>we are pleased to work with our partners</p>
                    <div className="row d-flex justify-content-between">
                        {[brand1, brand2, brand3, brand4, brand5].map((brand, i) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 mb-lg-0" key={i}>
                                <div className="partner-card">
                                    <img src={brand} className='partner-img' alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index