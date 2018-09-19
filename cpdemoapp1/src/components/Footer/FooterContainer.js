import React from "react";
import {Row, Col, Card, CardTitle} from 'react-materialize'
import "./Footer.css";


class FooterContainer extends React.Component {
render(){
    return (
<footer className="full-width bg-dark-blue">
    <div className="container-fluid">

      <div className="row footer-nav justify-content-between">
        <div className="col-md-4 col-lg-2">
          <h3 className="foot-head">About Us</h3>

          <ul className="foot-links">

            <li><a className="foot-link" href="/google">Contact Us</a></li>
            <li><a className="foot-link" href="/yahoo">Privacy Policy</a></li>
            <li><a className="foot-link" href="/yahoo">Cookie Policy</a></li>
            <li><a className="foot-link" href="/">Site Map</a></li>

          </ul>

        </div>
        <div className="col-md-4 col-lg-2">
          <h3 className="foot-head">Insurance</h3>

          <ul className="foot-links">

            <li><a className="foot-link" href="/">Find an Agent</a></li>
            <li><a className="foot-link" href="/">Get a quote</a></li>

          </ul>

        </div>
        <div className="col-md-4 col-lg-2">
          <h3 className="foot-head">Industry News</h3>

          <ul className="foot-links">

            <li><a className="foot-link" href="/">Blog</a></li>
            <li><a className="foot-link" href="/">Press Release</a></li>

          </ul>

        </div>
      </div>

      <div className="row">

        <div className="col-md-4 order-xs-first order-md-last footer-social">
          <div className="float-lg-right">
            <a href="fb.com" aria-label="LinkedIn page"><i aria-hidden="true" className="fab fa-linkedin"></i>
</a>
            <a href="fb.com" aria-label="Google Plus  page"><i aria-hidden="true" className="fab fa-google-plus-g"></i>
</a>
            <a href="fb.com" aria-label="Twitter  page"><i aria-hidden="true" className="fab fa-twitter"></i>
</a>
            <a href="fb.com" aria-label="Facebook  page"><i aria-hidden="true" className="fab fa-facebook-square"></i>
</a>
            <a href="fb.com" aria-label="Instagram  page"><i aria-hidden="true" className="fab fa-instagram"></i>
</a>
          </div>
        </div>

        <div className="col-md-8 order-xs-last order-md-first footer-disclaimer">
          <p className="disclaimer">© Surety Insurance Group suretyinsurance.com</p>
          <p className="disclaimer">We offer insurance by phone, online and through independent agents. Prices vary based on how you buy.</p>
          <p className="disclaimer">*National average annual car insurance savings by new customers surveyed who saved with Surety in 2017.</p>
          <p className="disclaimer">Surety Home Advantage® policies are placed through Surety Specialty Insurance Agency, Inc. with affiliated and third-party insurers who are solely responsible for claims, and pay PSIA commission for policies sold. Prices, coverages, privacy
            policies, and PSIA's commission vary among these insurers. How you buy (phone, online, mobile, or independent agent/broker) determines which insurers are available to you. A quote from one of the insurers can be provided through this
            site. Click here for a quote from other insurers or here for more information about PSIA's commission. Discounts not available in all states and situations.</p>
        </div>

      </div>

    </div>
  </footer>
)
}
};
export default FooterContainer;