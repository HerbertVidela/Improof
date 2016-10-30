import React from 'react';
import { Input, Button } from 'react-onsenui';

export default class LoginForm extends React.Component {
  render() {
    const { 
      onSignIn,
      authError,
      navigator,
     } = this.props;

    const submitForm = () => {
      let loginForm = document.getElementsByClassName('login-form')[0];
      onSignIn(navigator);
    }

    const goBackHandler = () => {
      navigator.popPage();
    }

    return(
      <form className="login-form">
        <div>
          <Input className="input-full-width auth-input" placeholder="Email" type="text" />
        </div>
        <div>
          <Input className="input-full-width auth-input" placeholder="Password" type="password" />
        </div>
        <div className="flex-btns-wrapper">
          <Button className="light-btn short-btn" onClick={goBackHandler}>Cancel</Button>
          <Button className="dark-btn short-btn" onClick={submitForm}>Accept</Button>
        </div>
      </form>
    )
  }
}