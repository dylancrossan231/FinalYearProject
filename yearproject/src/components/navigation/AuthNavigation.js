/**
 * MY LEGS ARE BIGGER THAN MY PERSONALITY
 */

import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer }from 'react-navigation';
import PeopleList from '../PeopleList';
import CompanyList from '../CompanyList';
import WorkoutsHome from '../WorkoutsHome';



const AuthTabNavigator = createBottomTabNavigator(
    {
        People: PeopleList,
        Company: CompanyList,
        Workout: WorkoutsHome,
    },
    {
        initialRouteName: 'People',

        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#80cbc4',
            showLabel: false,
            showIcon: true,
            style: {
                backgroundColor: '#26a69a'
            }
        },
    }
);

// export default connect(mapStateToProps, actions)(AddPerson);

export default createAppContainer(AuthTabNavigator);
// export default connect(mapStateToProps, actions)(TabNavigatorComponent);

