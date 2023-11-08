import React from 'react';
import Clock from './Clock';

function Footer() {
  return (
    <div className="container-fluid p-4">
      <footer>
        <section className="section">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                
                <h3 className="footercontent">Made with ♡</h3>
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Images */}
        
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <a className="text-white" href="https://mdbootstrap.com/">
            <Clock />
          </a>
        </div>
      
      </footer>
    </div>
  );
}

export default Footer;

