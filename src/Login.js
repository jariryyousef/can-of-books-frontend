import React from 'react';
import Card from 'react-bootstrap/Card';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './LoginButton';


class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
          Press the button to log in
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in */}
          <LoginButton />
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
