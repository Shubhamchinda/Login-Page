import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
    className="btn btn-default responsive hover"
  >
    Sign Out
  </button>

export default SignOutButton;
