import React, {Component} from 'react';
import { Grid, Col, Image, Row, Tab, Tabs } from 'react-bootstrap';
import './Landing.css';
import { SignUpPage, INITIAL_STATE, byPropKey, SignUpForm} from './SignUp.js';

export default class LandingPage extends Component{
  render() {
    return(
      <Grid>
      <Row className="show-grid">
      <div className="hidee">
      <Col xs={12} sm={8}>
      <div >
        <Image src="https://images.pexels.com/photos/63324/california-road-highway-mountains-63324.jpeg" alt="img" className="header-image img-fluid" />
        <h2 className="mainn">A Road is like a Movie,<br />This is a Sub Tagline</h2>
        </div>
        <Row className="show-grid">
        <Col xs={12} sm={4} className="person-wrapper">
        <Image src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg" circle className="random" />
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
        <Image src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg" circle className="random" />
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
        <Image src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg" circle className="random" />
        </Col>
        </Row>
      </Col>
      </div>
      <Col xs={12} sm={4} >
        <SignUpForm/>
      </Col>

    </Row>
  </Grid>
  );
}
}
