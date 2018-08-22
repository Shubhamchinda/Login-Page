import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PasswordForgetLink } from './PasswordForget';
import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

const SignInPage = ({ history }) =>
  <div>
  <Row className= "show-grid text-center" >
    <h1>Sign In</h1>
      <SignInForm history={history} />
    <div>
      <PasswordForgetLink />
    </div>
    <div>
      <SignUpLink />
    </div>
    </Row>
  </div>

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
      <div className="section">
      <div className="container">
      <div className="wrapper">
      <form onSubmit={this.onSubmit}>
      <div class="row">
      <div class="col-sm-4 col-sm-offset-4">
      <div className="form-group">
        <Row className= "show-grid text-center">
        <input className="form-control"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
          </Row>
        </div>
        </div>
        <div class="row">
          <div class="col-sm-4 col-sm-offset-4">
          <div className="form-group">
        <Row className= "show-grid text-center">
        <input className="form-control"
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        </Row>
          </div>
          </div>
          </div>
        <div class="row">
        <div class="col-sm-4 col-sm-offset-4">
        <div className="form-group">
        <Row className= "show-grid text-center">
        <button disabled={isInvalid} type="submit" className="btn btn-default hover">
          Sign In
        </button>
        </Row>
        </div>
        { error && <p>{error.message}</p> }
        </div>
        </div>
        </div>
      </form>
      </div>
      </div>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
