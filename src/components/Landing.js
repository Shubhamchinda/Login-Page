import React, {Component} from 'react';
import { Grid,  Image, Row, Col, Tab, Tabs, Panel, ListGroup, ListGroupItem,Badge } from 'react-bootstrap';
import './Landing.css';
import { SignUpPage, INITIAL_STATE, byPropKey, SignUpForm} from './SignUp.js';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
export default class LandingPage extends Component{
  render() {
    return(
      <div>
      <Grid>
      <Row className="show-grid">
      <div className="hidee">
      <Col xs={12} sm={8}>

            <div>
        <Image src="https://images.pexels.com/photos/63324/california-road-highway-mountains-63324.jpeg" alt="img" className="header-image img-fluid" />
        <h2 className="mainn">A Road is like a Movie,<br />This is a Sub Tagline</h2>
        </div>
        <br/>
              <Col xs={12} sm={4} className="person-wrapper">
                <Panel className="pannel">
          <Panel.Heading className="backk">
            <h4 className="text-center">USER 1</h4>
          </Panel.Heading>
            <Panel.Body>
              <Image src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg" className="random img-thumbnail" />
            </Panel.Body>
              <ListGroup>
              <ListGroupItem className="itemm">Item 1</ListGroupItem>
              <ListGroupItem className="itemm">Item 2</ListGroupItem>
            </ListGroup>
        </Panel>;</Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Panel className="pannel">
          <Panel.Heading>
            <h4 className="text-center">USER 2</h4>
          </Panel.Heading>
            <Panel.Body>
              <Image src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg" className="random img-thumbnail" />
            </Panel.Body>
              <ListGroup>
              <ListGroupItem className="itemm">Item 1</ListGroupItem>
              <ListGroupItem className="itemm">Item 2</ListGroupItem>
            </ListGroup>
        </Panel>;</Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Panel className="pannel">
          <Panel.Heading>
            <h4 className="text-center">USER 3</h4>
          </Panel.Heading>
            <Panel.Body>
              <Image src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg" className="random img-thumbnail" />
            </Panel.Body>
              <ListGroup>
              <ListGroupItem className="itemm">Item 1</ListGroupItem>
              <ListGroupItem className="itemm">Item 2</ListGroupItem>
            </ListGroup>
        </Panel>;</Col>


      </Col>
      </div>
      <Col xs={12} sm={4} >
      <h3 className="text-left num"><b>Number Of Users</b></h3>
      <h4 className="text-left"><b>175,232</b><span className="more"> and more..</span></h4>
      <div className="card">
        <SignUpForm/>
        </div>
          <br/><br/>
          <Col xs={12} sm={4} className="specials" >
          <div >
            <h4 className="text-center sps" ><b>SPECIAL OFFERS</b></h4>
          </div>
          </Col>

      </Col>

    </Row>
  </Grid>

    <div className="footer">
      <footer>
      <div className="container">
        <Row>
          <Col xs={1} md={1}>
            <Image src="https://image.ibb.co/gBdw7p/Screenshot_224.png" width="80" height="50" className="fimage" />
            </Col>
          <Col xs={3} md={3} className="filmy">
            <h4><b>filmyprofile.com - 2018</b></h4>
          </Col>
          <Col xs={4} md={4}>
          </Col>
          <Col xs={1} md={1}>
            <h4><b>FAQs</b></h4>
          </Col>
          <Col xs={1} md={1}>
            <h4><b>Contact Us</b></h4>
          </Col>
          <Col xs={1} md={1}>
            <h4><b>About Us</b></h4>
          </Col>
          <Col xs={1} md={1}>
            <h4><b>Terms</b></h4>
          </Col>
        </Row>
      </div>
      </footer>
    </div>

  </div>

  );
}
}
