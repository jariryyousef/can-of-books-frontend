import { Component } from "react";
// import Button from 'react-bootstrap/Button'

class LogoutButton extends Component {

  render() {
    return (
      
      <button onClick={this.props.onLogout}>
        Log Out
      </button>
    );
  }
};

export default LogoutButton;
