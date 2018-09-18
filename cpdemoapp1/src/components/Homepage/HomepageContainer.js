import React from "react";
import {Row, Col, Card, CardTitle} from 'react-materialize'
import "./Homepage.css";
// import carol from "./images/carol.jpg";
// import david from "./images/david.jpg";
// import pritha from "./images/pritha.jpg";
// import nate from "./images/nate.jpg";

//super means start up the library


class HomepageContainer extends React.Component {



    render() {
    return(
        <div className="HomepageComponent">
        <div className="us">
            <Row className="container">
                <Col s={12}><h3>Welcome to this Page</h3></Col>
            </Row>
           
            </div>
                </div>
    )
    }
}
export default HomepageContainer;
