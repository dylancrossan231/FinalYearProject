import React, {Component} from 'react';
import {connect} from 'react-redux';

import AuthNavigation from './AuthNavigation';
import DefaultNavigation from './DefaultNavigation';


const NavigationController = (props) => (
    props.token
    ? <AuthNavigation />
    : <DefaultNavigation />
)


const mapStateToProps = (state) => {
  return {
    token: state.people.token,
  };
};

export default connect(mapStateToProps)(NavigationController);
