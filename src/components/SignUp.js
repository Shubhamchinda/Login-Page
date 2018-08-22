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
    <div className="row">
    <SignUpForm history={history}/>
    </div>
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
    <div class="row">
    <div class="col-sm-4 col-sm-offset-4">
    <div className="form-group">
    <Row className= "show-grid text-center">
		<input className="form-control"
			value = {username}
			onChange = {event => this.setState(byPropKey('username',event.target.value))}
			type="text"
			placeholder = "Full Name"
		/>
    </Row>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-sm-4 col-sm-offset-4">
    <Row className= "show-grid text-center form-group">
		<input className="form-control"
			value={email}
			onChange={event => this.setState(byPropKey('email', event.target.value))}
			type = "text"
			placeholder = "Email Address"
		/>
    </Row>
    </div>
    </div>
    <div class="row">
    <div class="col-sm-4 col-sm-offset-4">
    <Row className= "show-grid text-center form-group">
		<input className="form-control"
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        </Row>
        </div>
        </div>
        <div class="row">
        <div class="col-sm-4 col-sm-offset-4">
        <Row className= "show-grid text-center form-group">
        <input className="form-control"
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        </Row>
        </div>
        </div>
        <div class="row">
        <div class="col-sm-4 col-sm-offset-4">
        <Row className= "show-grid text-center form-group">
        <button disabled={isInvalid} type="submit" className='btn btn-default hover'>
          Sign Up
        </button>
        </Row>

        { error && <p>{error.message}</p> }
        </div>
        </div>
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
