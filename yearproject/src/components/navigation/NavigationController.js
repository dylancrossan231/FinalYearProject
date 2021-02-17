import React, {Component} from 'react';
import {connect} from 'react-redux';
import AuthNavigation from './AuthNavigation';
import DefaultNavigation from './DefaultNavigation';
import StackNavigator from './StackNavigator';

const NavigationController = (props) => {
  if (props.token) return <AuthNavigation />;
  return <DefaultNavigation />;
};

const mapStateToProps = (state) => {
  return {
    token: state.people.token,
  };
};

export default connect(mapStateToProps)(NavigationController);
