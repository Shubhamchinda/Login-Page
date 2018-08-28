import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { PasswordForgetLink } from './PasswordForget';
import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './signin.css';

const SignInPage = ({ history }) =>
  <SignInForm history={history} />

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <Nav pullRight >
              <NavItem eventKey={1}>
                <input className="form-control navvbar"
                  value={email}
                  onChange={event => this.setState(byPropKey('email', event.target.value))}
                  type="text"
                  placeholder="Email Address"
                />
            </NavItem>
        <NavItem eventKey={2}>
            <input className="form-control navvbar"
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
            />
        </NavItem>
        <NavItem eventKey={3}>
              <Button onClick={this.onSubmit}   type="submit" className="hover signinb"
              componentClass={Link} href="/home" to="/home">
          Login
          </Button>
        </NavItem>
        { error && <p>{error.message}</p> }
       </Nav>
       </form>
       </div>
    );
  }
}

export default (SignInPage);

export {
  SignInForm,
};
