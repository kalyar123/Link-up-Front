import React from 'react'
// import HijriDatePicker from 'react-hijri-datepicker';
// import DatePicker from 'react-datepicker';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Frontfooter from './Frontfooter'
const Hijricalender = () => {
  return (
    
    <div>
      <div className="page-wrapper">
  
  <header id="header" className="wpo-site-header wpo-header-style-3">
    <nav className="navigation navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="open-btn">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            {/* Logo icon */}
            <b>
             
            {/* <img
                src="../msjid/images/logoicon.png"
                alt="homepage"
                className="dark-logo"
              /> */}
              {/* Light Logo icon */}
              <img
                src="../assets/images/newlogo.jpg"
                alt="homepage"
                className="light-logo"
              />
             
            </b>
            {/*End Logo icon */}
            {/* Logo text */}
            <span>
              <h5 className='logo1'> Linkup-Community</h5>
             
             
            </span>{" "}
          </a>
        </div>
        <div
          id="navbar"
          className="navbar-collapse collapse navbar-right navigation-holder"
        >
          <button className="close-navbar">
            <i className="ti-close" />
          </button>
          <ul className="nav navbar-nav">
            <li className="menu-item-has-children">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li className="menu-item-has-children">
              <a href="/quran">Quran</a>
            </li>
           
            <li className="menu-item-has-children">
              <a href="/prayer">Prayer timing</a>
            </li>
            <li className="menu-item-has-children">
              <a href="/hijricalender">Calender</a>
            
            </li>
            <li className="menu-item-has-children">
              <a href="/calendar">Hijri Calender</a>
            
            </li>
          </ul>
        </div>
        {/* end of nav-collapse */}
      </div>
      {/* end of container */}
    </nav>
  </header>
  {/* end of header */}
  {/* .wpo-breadcumb-area start */}
  <div className="wpo-breadcumb-area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="wpo-breadcumb-wrap">
            <h2 style={{color:'darkcyan'}}>Calender</h2>
            {/* <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>Calender</span>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* .wpo-breadcumb-area end */}
  <br></br>
  <br></br>
  <div className='y-5'>
    <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={
          {
            start: "today prev,next", // will normally be on the left. if RTL, will be on the right
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay" // will normally be on the right. if RTL, will be on the left
          }
        }
        height={"90vh"}
    />
  </div>
  <div className="wpo-ne-footer-2">
    {/* start wpo-site-footer */}
    <Frontfooter/>
    {/* end wpo-site-footer */}
  </div>
</div>

    </div>
   
  )
}

export default Hijricalender











