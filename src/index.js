import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';

import App from './components/App';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const store = createStore();

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log('user has signed in or up', user);
    browserHistory.push('/app');
  } else {
    console.log('user has signed out or still needs to sign in', user);
    browserHistory.replace('/signin');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  </Provider>, document.getElementById('root')
)
