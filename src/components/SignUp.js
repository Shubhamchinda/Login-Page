import React, { Component } from 'react';
import {
  Link,
  withRouter,
 } from 'react-router-dom';
 import { auth, db } from '../firebase';
 import { Jumbotron, Grid, Row, Col, Button, Tooltip} from 'react-bootstrap';

import * as routes from '../constants/routes';
import './Signup.css';

const SignUpPage = ({ history }) =>

    <SignUpForm history={history}/>

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
      <div className="section">
      <div className="wrapper">
      <form onSubmit={this.onSubmit}>
    <div className="col-sm-8 col-sm-offset-2">
      <h3 className="text-left num"><b>Number Of Users</b></h3>
      <h4 className="text-left">175,232 and more..</h4>
      <h1 className="text-center form-group"><b>JOIN US</b></h1>
      <Row xs={12} sm={12}>
      <Button bsStyle="primary" bsSize="large" block className="facebook form-group">
      FACEBOOK
      </Button>
      <Button bsSize="large" block className="form-group goohle">
      GOOGLE
      </Button>
      </Row>
      <Row>
        <Row>
        <h3 className="text-center">OR</h3>
        </Row>
      </Row>

    <div className="row">
    <div className="col-xs-12 col-sm-12">
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
    <div className="row">
    <div className="col-xs-12 col-sm-12">
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
    <div class="col-xs-12 col-sm-12">
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
        <div class="col-xs-12 col-sm-12">
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
        <div class="col-xs-12 col-sm-12">
        <Row className= "show-grid text-center form-group">
        <Button disabled={isInvalid} type="submit" className='btn btn-default hover' block bsStyle="primary">
          Submit
        </Button>
        </Row>

        { error && <p>{error.message}</p> }
        </div>
        </div>

      </div>
      </form>
      </div>
      </div>
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
