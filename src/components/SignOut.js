import React from 'react';
import {Button} from "react-bootstrap";
import { auth } from '../firebase';

const SignOutButton = () =>
  <Button
    type="button"
    onClick={auth.doSignOut}
    className="btn btn-default responsive hover"
    bsStyle="primary"
  >
    Sign Out
  </Button>

export default SignOutButton;
