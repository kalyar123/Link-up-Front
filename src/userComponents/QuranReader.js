import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page, pdfjs } from 'react-pdf';
import Frontfooter from './Frontfooter';

function QuranReader() {
  const [currentPage, setCurrentPage] = useState(1);
  const [versesPerPage] = useState(10);
  const [quranicVerses, setQuranicVerses] = useState([]);
  const [numPages, setNumPages] = useState(null);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:9000/api/quran/paraNumber');
        console.log(response.data);
        setQuranicVerses(response.data.verses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const totalPages = Math.ceil(quranicVerses.length / versesPerPage);
  const indexOfLastVerse = currentPage * versesPerPage;
  const indexOfFirstVerse = indexOfLastVerse - versesPerPage;
  const currentVerses = quranicVerses.slice(indexOfFirstVerse, indexOfLastVerse);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>


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
            <h2 style={{color:'darkcyan'}}>Quran-e-majeed</h2>
            {/* <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>Quran</span>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
        <h1 style={{ color: 'darkcyan', textAlign: 'center' }}>
          Quran - Page {currentPage}
        </h1>
        {currentVerses.length > 0 ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
              <button
                onClick={previousPage}
                disabled={currentPage === 1}
                style={{ backgroundColor: 'darkcyan', marginRight: '10px' }}
                className="btn btn-info"
              >
                Previous Page
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                style={{ backgroundColor: 'darkcyan', marginLeft: '10px' }}
                className="btn btn-info"
              >
                Next Page
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
              <Document
                file={require('../assets/Quran.pdf')}
                onLoadSuccess={handleDocumentLoadSuccess}
              >
                <Page pageNumber={currentPage} width={1000} />
              </Document>
            </div>
          </div>
        ) : null}
      </div>


    
      <Frontfooter />
    </div>
  );
}

export default QuranReader;
