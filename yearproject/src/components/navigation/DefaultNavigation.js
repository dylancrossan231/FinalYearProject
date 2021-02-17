
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer }from 'react-navigation';
import AddPerson from '../AddPerson';
import loginScreen from '../loginScreen';


const DefaultTabNavigator = createBottomTabNavigator(
  {
    AddPerson: AddPerson,
    Login: loginScreen,
  },
  {
    initialRouteName: 'Login',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#80cbc4',
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: '#5DB075',
      },
    },
  },
);

// export default connect(mapStateToProps, actions)(AddPerson);

export default createAppContainer(DefaultTabNavigator);
// export default connect(mapStateToProps, actions)(TabNavigatorComponent);

