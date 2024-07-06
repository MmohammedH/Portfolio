import React from 'react'
import './Footer.css'
import { Helmet } from 'react-helmet';

const MyComponent = () => (
  <div>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </Helmet>
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 by @Mohammed | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <a href="#about">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div>
    </footer>
  </div>
);

export default MyComponent;
