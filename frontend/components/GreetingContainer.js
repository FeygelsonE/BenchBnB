import React from 'react';
import { connect } from 'react-redux';
import Greeting from './Greeting';
import {login, signup} from '../actions/session_actions.js';

// {
//   session: {
//     currentUser: null,
//   },
//   errors: {
//     session: ["Invalid credentials"]
//   }
// }

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (user) => {
      dispatch(login(user));
    },
    signUpUser: user => {
      dispatch(signup(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
