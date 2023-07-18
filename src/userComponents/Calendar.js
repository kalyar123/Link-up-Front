import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import moment from 'moment-hijri';
import 'moment/locale/ar-sa';
import 'react-calendar/dist/Calendar.css';
import Frontfooter from './Frontfooter';

const HijriCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Convert Gregorian date to Hijri date
  const getHijriDate = (date) => {
    moment.locale('ar-sa');
    return moment(date).format('iD iMMMM iYYYY');
  };

  // Define event dates
  const eventDates = [
    { date: '1444/12/1', description: 'Eid al-Fitr' },
    { date: '1444/12/10', description: 'Day of Arafah' },
    // Add more event dates here
  ];

  const onChange = (date) => {
    setSelectedDate(date);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const hijriDate = getHijriDate(date);
      const eventDate = eventDates.find((event) => event.date === hijriDate);

      return (
        <div>
          <div style={{ fontWeight: eventDate?.description === 'Eid al-Fitr' ? 'bold' : 'normal' }}>{hijriDate}</div>
          {eventDate && <div>{eventDate.description}</div>}
        </div>
      );
    }
    return null;
  };
  return (
    <div>


<div className='page-wrapper'>

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
      <h2 style={{color:'darkcyan'}}>Hijri Calender</h2>
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





<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '10px' }}>
        <div>
          <Calendar
            style={{ width: '100%' }}
            onChange={onChange}
            value={selectedDate}
            calendarType="Arabic"
            tileContent={tileContent}
          />
        </div>
      </div>


      <Frontfooter/>
      </div>
    </div>
  );
};

export default HijriCalendar;
