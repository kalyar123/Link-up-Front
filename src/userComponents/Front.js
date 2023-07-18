import React, { useEffect, useState } from 'react'

import Frontfooter from './Frontfooter'
import Frontheader from './Frontheader'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.css';
import './ServiceCard.css';
const Front = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear'
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    if (!isLoggedIn) {
      alert('Please first login yourself.');
    } else {
      // Redirect the user to the specified link
      window.location.href = '/';
    }
  };

  return (
    <div>
      <div className="page-wrapper">
  {/* start preloader */}
  {/* <div className="preloader">
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube" />
      <div className="sk-cube2 sk-cube" />
      <div className="sk-cube4 sk-cube" />
      <div className="sk-cube3 sk-cube" />
    </div>
  </div> */}
  {/* end preloader */}
  <Frontheader/>
  {/* start of hero */}
  <section className="hero hero-style-1">
      <div className="hero-slider">
        <Slider {...settings}>
          <div className="slide">
            <div className="container">
              <img
                src="msjid/images/slider/slide-1.jpg"
                alt=""
                className="slider-bg"
              />
              <div className="row">
                <div className="col col-md-8 col-md-offset-2 slide-caption">
                  <div className="slide-title">
                    <h2>Linkup Community</h2>
                    <p style={{ color: 'white' }}>
                      Our system is designed to enhance community support through effective communication, fund collection, and public information dissemination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="container">
              <img
                src="msjid/images/slider/slide-2.jpg"
                alt=""
                className="slider-bg"
              />
              <div className="row">
                <div className="col col-md-8 col-md-offset-2 slide-caption">
                  <div className="slide-title">
                    <h2>Linkup Community</h2>
                    <p style={{ color: 'white' }}>
                      Our system is designed to enhance community support through effective communication, fund collection, and public information dissemination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="container">
              <img
                src="msjid/images/slider/slide-3.jpg"
                alt=""
                className="slider-bg"
              />
             <div className="row">
                <div className="col col-md-8 col-md-offset-2 slide-caption">
                  <div className="slide-title">
                    <h2>Linkup Community</h2>
                    <p style={{ color: 'white' }}>
                      Our system is designed to enhance community support through effective communication, fund collection, and public information dissemination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  {/* end of hero slider */}
  {/* wpo-about-area start */}
  <div className="wpo-about-area-2 section-padding">
    <div className="container">
      <div className="wpo-about-wrap">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="wpo-about-img-3">
              <img src="msjid/images/about3.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="wpo-about-text">
              <div className="wpo-section-title">
                <h3 style={{textAlign:'center',color:'darkcyan'}}>About Linkup Community</h3>
                {/* <h2>Seeking of knowledge is a duty of every Muslim</h2> */}
              </div>
              <p>
                Our system aids in the betterment of society by allowing the muslim community to link up by donating blood, giving charity to mosques and allowing the muslim community to communicate with eachother by group chat. 
              </p>
              
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  {/* wpo-about-area end */}
  {/* service-area-start */}
  <div className="service-area-2">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="wpo-section-title">
            <h4 style={{color:'darkcyan'}}>What We Offer</h4>
            <h2 style={{color:'darkcyan'}}>Our Services</h2>
          </div>
        </div>
      </div>
      <div className="service-wrap">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 custom-grid col-12">
            <div className="service-single-item">
              <div className="service-single-img">
                <img src="msjid/images/service/blood3.jpg" alt="" />
              </div>
              <div className="service-text">
                <h2>
                  <a href="#" onClick={handleClick}>Fund</a>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 custom-grid col-12">
            <div className="service-single-item">
              <div className="service-single-img">
                <img src="msjid/images/service/msjid.jpg" alt="" />
              </div>
              <div className="service-text">
                <h2>
                  <a href="#" onClick={handleClick}>Mosque</a>
                </h2>
              </div>
            </div>
          </div>
         
        
         
          <div className="col-lg-4 col-md-4 col-sm-6 custom-grid col-12">
            <div className="service-single-item">
              <div className="service-single-img">
                <img src="msjid/images/service/location.jpg" alt="" />
              </div>
              <div className="service-text">
                <h2>
                  <a href="#" onClick={handleClick}>Location</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  </div>
 
  <div className="wpo-ne-footer">
    {/* start wpo-news-letter-section */}
   
   <Frontfooter/>
    {/* end wpo-site-footer */}
  </div>
</div>

    </div>
  )
}

export default Front
