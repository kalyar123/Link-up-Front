import React from 'react'

const Frontfooter = () => {
  return (
    <div>
       <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-3 col-sm-6">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  {/* <img src="msjid/images/logo.png" alt="blog" /> */}
                  <img
                src="../assets/images/newlogo.jpg"
                alt="homepage"
                className="light-logo"
              />
             
            
        
            <span>
              <h5 className='logo1'> Linkup-Community</h5>
             
             
            </span>{" "}
          
                </div>
                <p style={{ color: 'black' }}>Our system is designed to enhance community support through effective communication, fund collection, and public information dissemination.</p>

               
              </div>
            </div>
            <div className="col col-lg-3 col-md-3 col-sm-6">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Service</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Blood donation</a>
                  </li>
                  <li>
                    <a href="#">Mosque maintinance</a>
                  </li>
                  <li>
                    <a href="#">Fund donation</a>
                  </li>
                  <li>
                    <a href="#">Chat</a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col col-lg-2 col-md-3 col-sm-6">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                
                  <li>
                    <a href="#">Prayer Times</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-lg-offset-1 col-md-3 col-sm-6">
              <div className="widget market-widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <p style={{ color: 'black' }}>Our system is designed to enhance community support through effective communication, fund collection, and public information dissemination.</p>

                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi ti-location-pin" />
                      28 Street, Sargodha, Pakistan
                    </li>
                    <li>
                      <i className="fi flaticon-call" />
                      +923083911279
                    </li>
                    <li>
                      <i className="fi flaticon-envelope" />
                      adnanbravo000@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end container */}
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">© 2020 Linkup. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Frontfooter
