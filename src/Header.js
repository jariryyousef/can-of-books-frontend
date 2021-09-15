import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import {withAuth0} from '@auth0/auth0-react';



class Header extends React.Component {
  render() {

    // console.log(this.props.auth0.isAuthenticated);
// console.log(this.props.auth0.user);
      const isAutth= this.props.auth0.isAuthenticated;

    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>

        { isAutth &&
        <NavItem><Link to="/profile" className="nav-link">profile</Link></NavItem>
        }
      {/* <LoginButton/> */}
      
        {/* TODO: if the user is logged in, render a navigation link to profile page */}

        {/* TODO: if the user is logged in, render the `LogoutButton` */}

        {/* if the value is true render the btn */}
        
      {
        isAutth ? <LogoutButton/> : <LoginButton/>
      }
        
      </Navbar>
    )
  }
}

export default withAuth0(Header);
