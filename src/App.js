import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks';
import Login from './Login';
import Profile from './Profile';

import {withAuth0} from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    const isAutth= this.props.auth0.isAuthenticated;
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
      
          <Switch>

          {/* <Route path="/" exact render={props => <BestBooks  {...props} />} /> */}
          <Route exact path="/">
          {
              isAutth ? <BestBooks /> : <Login />

            }
          </Route>
            
              
              <Route exact path="/profile">

                { isAutth && <Profile/>}

               </Route>
            
           
           
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0( App);
