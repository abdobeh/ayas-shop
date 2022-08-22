import React, { useState } from 'react';
import { navigate } from '@reach/router';

import LoginForm from './LoginForm';
import SignUpRoute from './SignUpRoute';
import { auth } from '../../../firebase/Firebase';

const LoginAuth = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpClickHandler = async event => {
    event.preventDefault();

    await navigate('/signup');
  };

  const clickHandler = async (event, email, password) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate('/loadingpage'))
      .then(() => window.mainplis.goToLoadingPage())
      .catch(error => {
        setPassword('');
        setEmail('');
      });
  };

  const changeHandler = event => {
    const { name, value } = event.currentTarget;

    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
  };

  return (
    <>
      <div >
        <div item xs={8}>
          <LoginForm
            onChangeHandler={event => changeHandler(event)}
            buttonOnClickHandler={event => clickHandler(event, email, password)}
            emailInputValue={email}
            passwordInputValue={password}
          />
        </div>
        <div item xs={4}>
          <SignUpRoute onClickHandler={event => signUpClickHandler(event)} />
        </div>
      </div>
      
    </>
  );
};

export default LoginAuth;
