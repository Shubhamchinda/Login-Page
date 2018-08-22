import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './Navigation.css';


const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <Navbar default collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
          <Link to={routes.LANDING}>MAIN PAGE</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1}>
        <Link to={routes.LANDING}>MAIN PAGE</Link>
        </NavItem>
        <NavItem eventKey={2}>
        <Link to={routes.HOME}>HOME</Link>
        </NavItem>
        <NavItem eventKey={3} >
        <SignOutButton />
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


const NavigationNonAuth = () =>
<Navbar default collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
        <Link to={routes.LANDING}>MAIN PAGE</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1}>
      <Link to={routes.LANDING}>MAIN PAGE</Link>
      </NavItem>
      <NavItem eventKey={2}>
      <Link to={routes.SIGN_IN}>SIGN IN</Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

export default Navigation;
