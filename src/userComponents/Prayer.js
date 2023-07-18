import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Frontfooter from './Frontfooter';

const Prayer = () => {
  const [prayerTimings, setPrayerTimings] = useState([]);
  const [address, setAddress] = useState('');

  const fetchPrayerTimings = async () => {
    try {
      const response = await axios.get(
        `http://api.aladhan.com/v1/calendarByAddress?address=${encodeURIComponent(
          address
        )}&method=2`
      );
      const { data } = response.data;
      setPrayerTimings(data);
    } catch (error) {
      console.error('Error fetching prayer timings:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPrayerTimings();
  };

  useEffect(() => {
    // Fetch user's location using Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const fetchAddress = async () => {
          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const { address } = response.data;
            setAddress(address.city || address.town || address.village || '');
          } catch (error) {
            console.error('Error fetching user location:', error);
          }
        };
        fetchAddress();
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  return (
    <div>
      {/* Your header code */}
      {/* Your breadcumb code */}

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
              <a href="/calendar">hijri Calender</a>
            </li>
          </ul>
        </div>
        {/* end of nav-collapse */}
      </div>
      {/* end of container */}
    </nav>
  </header>


  <div className="wpo-breadcumb-area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="wpo-breadcumb-wrap">
            <h2 style={{color:'darkcyan'}}>Prayer Timing</h2>
            {/* <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>Prayers</span>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  </div>


      <div className="timer-section">
        <div className="row">
          <div className="col-md-5">
            <div className="timer-text">
              <h2 style={{ color: 'darkcyan' }}>Prayer Times</h2>
              <p>Prayer times in {address}</p>
              <form onSubmit={handleSubmit}>
                {/* Form inputs */}
                {/* ... */}
                <button
                  type="submit"
                  className="btn btn-darkcyan"
                  style={{ color: 'white', backgroundColor: 'darkcyan' }}
                >
                  Get Timings
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-5 col-md-offset-1">
            <div className="timer-num">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Fajr</th>
                    <th>Dhuhr</th>
                    <th>Asr</th>
                    <th>Maghrib</th>
                    <th>Isha</th>
                  </tr>
                </thead>
                <tbody>
                  {prayerTimings.map((timing) => (
                    <tr key={timing.date.readable}>
                      <td>{timing.date.readable}</td>
                      <td>{timing.timings.Fajr}</td>
                      <td>{timing.timings.Dhuhr}</td>
                      <td>{timing.timings.Asr}</td>
                      <td>{timing.timings.Maghrib}</td>
                      <td>{timing.timings.Isha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Rest of your code */}
      </div>
      <Frontfooter />
    </div>
  );
};

export default Prayer;
