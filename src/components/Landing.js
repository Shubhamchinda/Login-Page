import React, {Component} from 'react';
import { Grid, Col, Image, Row, Tab, Tabs, Panel, ListGroup, ListGroupItem,Badge } from 'react-bootstrap';
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
        <br/><br/>
              <Col xs={12} sm={4} className="person-wrapper">
                <Panel className="pannel">
          <Panel.Heading>
            <h4 className="text-center">USER 1</h4>
          </Panel.Heading>
            <Panel.Body>
              <Image src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg" className="random img-thumbnail" />
            </Panel.Body>
              <ListGroup>
              <ListGroupItem>Item 1</ListGroupItem>
              <ListGroupItem>Item 2</ListGroupItem>
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
              <ListGroupItem>Item 1</ListGroupItem>
              <ListGroupItem>Item 2</ListGroupItem>
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
              <ListGroupItem>Item 1</ListGroupItem>
              <ListGroupItem>Item 2</ListGroupItem>
            </ListGroup>         
        </Panel>;</Col>
        
        
      </Col>
      </div>
      <Col xs={12} sm={4} >
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
    <footer>
    </footer>
  </Grid>

  );
}
}
