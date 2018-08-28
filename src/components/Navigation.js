import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import { auth } from '../firebase';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap'
import './Navigation.css';
import * as signinn from './SignIn.js';


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
          <Link to={routes.LANDING}>
          <Image src="/images/logo.jpg" width="200" height="50" />
          </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1}>
        <Link to={routes.HOME}>HOME</Link>
        </NavItem>
        <NavItem eventKey={2} >
        <SignOutButton />
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


const NavigationNonAuth = () =>
<Navbar default collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
        <Link to={routes.LANDING}>
        <Image src="https://image.ibb.co/fAAhf9/Screenshot_222.png" width="200" height="50" className="logo" />
        </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
        < signinn.SignInForm />
  </Navbar.Collapse>
</Navbar>

export default Navigation;
