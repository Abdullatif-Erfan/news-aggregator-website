import React from "react";
import './footer.css';

const Footer: React.FC<{}> = () => {
  return <>
    <footer className="footer">
      <div className="footer-area bg-black pd-top-95">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="widget">
                <h5 className="widget-title">ABOUT US</h5>
                <div className="widget_about">
                  <p>
                    Information about the Organization, Vission and Mission.
                    Information about the Organization, Vission and Mission.
                    Information about the Organization, Vission and Mission.
                    Information about the Organization, Vission and Mission.
                    Information about the Organization, Vission and Mission.
                    Information about the Organization, Vission and Mission.
                    Information about the Organization, Vission and Mission.
                    </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="widget">
                <h5 className="widget-title">CONTACTS</h5>
                <ul className="contact_info_list">
                  <li>
                    <i className="fa fa-map-marker" />Kabul Afghanistan
                  </li>
                  <li>
                    <i className="fa fa-phone" /> +9370 80 88 185
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" /> abdullatif.erfan@techsharks.io{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center">
            <p>
              Designed and Developed by <a href="https://abdullatif.portfolio.vercel.app">Abdul Latif "Erfan"</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
}
export default Footer;