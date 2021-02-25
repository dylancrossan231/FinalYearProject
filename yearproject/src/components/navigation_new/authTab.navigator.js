import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './app-routes';
import PeopleList from '../PeopleList';
import CompanyList from '../CompanyList';
import WorkoutsHome from '../WorkoutsHome';

export function AuthTabNavigator(props) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator {...props}>
      <Tab.Screen name={routes.PEOPLE} component={PeopleList} />
    </Tab.Navigator>
  );
}