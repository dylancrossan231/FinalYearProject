/**
 * MY LEGS ARE BIGGER THAN MY PERSONALITY
 */
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createNavigationContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import PeopleList from '../PeopleList';
import CompanyList from '../CompanyList';
import WorkoutsHome from '../WorkoutsHome';
import AddWorkout from '../AddWorkout';

const Stack = createStackNavigator()

const workoutNavigator = (props) => {
  <Stack.Navigator {...props}>
    <Stack.Screen name="AddWorkout" component={AddWorkout} />
  </Stack.Navigator>
}
const Tab = createBottomTabNavigator();
  
const AuthTabNavigator = (props) => {
      <Tab.Navigator {...props}>
        <Tab.Screen name="People" component={PeopleList} />
        <Tab.Screen name="Company" component={CompanyList} />
        <Tab.Screen name="Workout" component={WorkoutsHome} />
      </Tab.Navigator>;

}

const MainNavigator = (props) => {
  // <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="WorkoutNavigator" component={workoutNavigator} />
  </Stack.Navigator>
  // </NavigationContainer>

}

// const MainNavigator = createStackNavigator({
//   AuthTabNavigator: AuthTabNavigator,
//   AuthStackNavigator: StackNavigator,
// }, {initialRouteName: 'AuthTabNavigator'});


export default createNavigationContainer(MainNavigator);
