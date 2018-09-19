import React from "react";
import {Row, Input, Button, Col, Card, CardTitle} from 'react-materialize'
import { PropTypes } from "prop-types";



const AccountSummary = (props) => {

    console.log(props)

    return (
    <form  className="contactForm" onSubmit={props.handleFormSubmit}>
        <div className="container ">
            <Row>
                <h3>55 Main Street, Hometown ST 55555</h3>
                <Input name="name"  s={12} label="Name"
                    onChange={(e) => props.handleInputChange(e) }/>
            </Row>
            <Row >
                <h3>john.smith@gmail.com</h3>
                <Input name="email"  type="email" label="Email" s={12} 
                    onChange={(e) => props.handleInputChange(e) }/>
            </Row>
            <Row >
                <h3>*******6543</h3>
                <Input name="message" type="textarea" label="Message" s={12} 
                    onChange={(e) => props.handleInputChange(e) }/>
            </Row>
            <Row >
            <Button type="submit" waves='light'>Submit</Button>
            </Row>
            
        </div>

    </form>
    );
};

AccountSummary.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired
}

export default AccountSummary;