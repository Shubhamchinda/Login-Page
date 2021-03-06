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
        <h2 className="mainn">A Road is like a Movie,<br /><i className="tagline">This is a Sub Tagline</i></h2>
        </div>
        <div className="user">
        <Col xs={12} sm={4} className="person-wrapper backk">
        <h4 className="text-center"><b>USER 1</b></h4>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper backk">
        <h4 className="text-center"><b>USER 2</b></h4>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper backk">
        <h4 className="text-center"><b>USER 3</b></h4>
        </Col></div>
        <br/><br/><br/>
              <Col xs={12} sm={4} className="person-wrapper">
                <Panel className="pannel">
            <Panel.Body>
              <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" className="random img-thumbnail" />
            </Panel.Body>
              <ListGroup>
              <ListGroupItem className="itemm"></ListGroupItem>
              <ListGroupItem className="itemm"></ListGroupItem>
              <ListGroupItem className="itemm"></ListGroupItem>
              <ListGroupItem className="itemm"></ListGroupItem><br/>
            </ListGroup>
        </Panel>;</Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Panel className="pannel">
            <Panel.Body className="boddy">
              <Image src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg" className="random img-thumbnail" />
            </Panel.Body>
              <ListGroup>
              <ListGroupItem className="itemm"></ListGroupItem>
              <ListGroupItem className="itemm"></ListGroupItem>
              <ListGroupItem className="itemm"></ListGroupItem>
              <ListGroupItem className="itemm"></ListGroupItem><br/>
            </ListGroup>
        </Panel>;</Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Panel className="pannel">
            <Panel.Body>
              <Image src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg" className="random img-thumbnail" />
            </Panel.Body>
              <ListGroup>
              <ListGroupItem className="itemm"></ListGroupItem>
              <ListGroupItem className="itemm"></ListGroupItem>
              <ListGroupItem className="itemm"></ListGroupItem>
              <ListGroupItem className="itemm"></ListGroupItem><br/>
            </ListGroup>
        </Panel>;</Col>


      </Col>
      </div>
      <Col xs={12} sm={4} c>
      <div className="hidee">
      <h3 className="text-left num"><b>Number Of Users</b></h3>
      <h4 className="text-left"><b>175,232</b><span className="more"> and more..</span></h4></div>
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

    </Row><br/>
  </Grid>

    <div className="footer">
      <footer>
      <div className="container">
        <Row>
          <Col xs={3} md={1} sm={1} >
            <Image src="https://image.ibb.co/gBdw7p/Screenshot_224.png" width="80" height="50" className="fimage" />
            </Col>
          <Col md={4} sm={2} className="filmy hidee">
            <h4><b>filmyprofile.com - 2018</b></h4>
          </Col>
          <Col md={3} sm={1} className="hidee">
          </Col>
          <Col xs={2} md={1} sm={1}>
            <h4><b>FAQs</b></h4>
          </Col>
          <Col xs={2} md={1} sm={1}>
            <h4><b>Contact Us</b></h4>
          </Col>
          <Col xs={2} md={1} sm={1}>
            <h4><b>About Us</b></h4>
          </Col>
          <Col xs={2} md={1} sm={1}>
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
