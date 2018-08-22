import React, { Component } from 'react';
import {
  Link,
  withRouter,
 } from 'react-router-dom';
 import { auth, db } from '../firebase';
 import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
  <Row className= "show-grid text-center" >

    <h1>SignUp</h1>
    <SignUpForm history={history}/>
    </Row>
  </div>

const INITIAL_STATE ={
	usename:'',
	email:'',
	passwordOne:'',
	passwordTwo:'',
	error: null,
};

const byPropKey = (propertyName, value) => () => ({
	[propertyName]: value,
});

class SignUpForm extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE};
	}
	onSubmit = (event) => {
		const {
      username,
      email,
      passwordOne,
    } = this.state;
    const {
      history ,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });

      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

	render()
	{
		const{
			username,
			email,
			passwordOne,
			passwordTwo,
			error,
		} = this.state;

		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === '' ||
			email === '' ||
			username === '' ;

		return (
		<form onSubmit={this.onSubmit}>
    <Row className= "show-grid text-center">
    <Col xs={12} sm={12} className="pwerson-wrapper">
		<input
			value = {username}
			onChange = {event => this.setState(byPropKey('username',event.target.value))}
			type="text"
			placeholder = "Full Name"
		/>
    </Col>
    </Row>
    <Row className= "show-grid text-center">
    <Col xs={12} sm={12} className="pwerson-wrapper">
		<input className="form-control"
			value={email}
			onChange={event => this.setState(byPropKey('email', event.target.value))}
			type = "text"
			placeholder = "Email Address"
		/>
    </Col>
    </Row>
    <Row className= "show-grid text-center">
    <Col xs={12} sm={12} className="pwerson-wrapper">
		<input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        </Col>
        </Row>
        <Row className= "show-grid text-center">
        <Col xs={12} sm={12} className="pwerson-wrapper">
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        </Col>
        </Row>
        <Row className= "show-grid text-center">
        <Col xs={12} sm={12} className="pwerson-wrapper">
        <button disabled={isInvalid} type="submit" className='btn btn-default hover'>
          Sign Up
        </button>
        </Col> </Row>

        { error && <p>{error.message}</p> }
		</form>
		);
	}
}


const SignUpLink = () =>
	<p>
		Dont have an account?
		{' '}
		<Link to={routes.SIGN_UP}>Sign up</Link>
	</p>


export default withRouter(SignUpPage);

export {
	SignUpForm,
	SignUpLink,
};
