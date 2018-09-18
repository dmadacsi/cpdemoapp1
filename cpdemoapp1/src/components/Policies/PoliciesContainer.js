import React, {Component} from "react";
import {Row, Col, Card, CardTitle} from 'react-materialize'
import './Policies.css';

class PoliciesContainer extends React.Component {


  render() {
  return(
<div className="row1">
          <div className="policiescontainer">
            <div className="col-sm-6">
              <div className="policy-price-block">
                <div className="policy-price-head">
                  <h2>Life Insurance</h2>
                  <span>Your Surety Insurance policy.</span>
                </div>
                <div className="policy-price-block-content active text-center">
                  <div className="policy-price-detail">
                    <h3>Term Life Insurance</h3>
                    <h4>$500,000</h4>
                    <div className="policy-price-desc">
                      <span>YOUR TERM LIFE POLICY</span>
                      <h5>$59.99/MO</h5>
                      <span>$686.88 Annually</span>
                    </div>
                  </div>
                  <button className="btn btn-gray" type="button">20 YEAR TERM LIFE</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="policy-price-block">
                <div className="policy-price-head">
                  <h2>Renters Insurance</h2>
                  <span>Learn more about our Renters Insurance.</span>
                </div>
                <div className="policy-price-block-content  text-center">
                  <div className="policy-price-detail">
                    <h3>Renters Insurance</h3>
                    <h4>Get A Quote</h4>
                    <div className="policy-price-desc">
                      <span>STARTING FROM</span>
                      <h5>$14.99/MO</h5>
                      <span>$179.88 Annually</span>
                    </div>
                  </div>
                  <button className="btn btn-gray" type="button">CLICK HERE</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="policy-price-block">
                <div className="policy-price-head">
                  <h2>Auto Insurance</h2>
                  <span>Learn more about our Auto Insurance.</span>
                </div>
                <div className="policy-price-block-content  text-center">
                  <div className="policy-price-detail">
                    <h3>Auto Insurance</h3>
                    <h4>Get A Quote</h4>
                    <div className="policy-price-desc">
                      <span>STARTING FROM</span>
                      <h5>$29.99/MO</h5>
                      <span>$350.88 Annually</span>
                    </div>
                  </div>
                  <button className="btn btn-gray" type="button">CLICK HERE</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="policy-price-block">
                <div className="policy-price-head">
                  <h2>Business Insurance</h2>
                  <span>Learn more about our Business Insurance.</span>
                </div>
                <div className="policy-price-block-content  text-center">
                  <div className="policy-price-detail">
                    <h3>Business Insurance</h3>
                    <h4>Get A Quote</h4>
                    <div className="policy-price-desc">
                      <span>STARTING FROM</span>
                      <h5>$59.99/MO</h5>
                      <span>$719.88 Annually</span>
                    </div>
                  </div>
                  <button className="btn btn-gray" type="button">CLICK HERE</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          
  )
  
  }
}
export default PoliciesContainer;