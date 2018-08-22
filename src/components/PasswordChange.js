import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
      <div className="row">
        <div className="col-sm-4 text-center col-sm-offset-4 form-group">
        <input className="form-control"
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="New Password"
        />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 text-center col-sm-offset-4 form-group">
        <input className="form-control"
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm New Password"
        />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 text-center col-sm-offset-4 form-group">
        <button disabled={isInvalid} type="submit" className="btn btn-default hover">
          Reset My Password
        </button>

        { error && <p>{error.message}</p> }
          </div>
        </div>
      </form>
    );
  }
}

export default PasswordChangeForm;
