import React from 'react';
import {Button} from 'semantic-ui-react';
import { auth } from '../firebase';

const SignOutButton = (props) =>
  <Button {...props}  type="button" onClick={auth.doSignOut}>
    Sign Out
</Button>


export default SignOutButton;