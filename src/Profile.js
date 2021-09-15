import { Component } from "react";

import {withAuth0} from '@auth0/auth0-react';

class Profile extends Component {

  render() {

    const user= this.props.auth0.user;
   return(
    <div>
    <p>welcome back {user.name}</p>
    <p>{user.email}</p>
    <img src={user.picture} alt="" />

    </div>
   )
  }
};

export default withAuth0(Profile);
