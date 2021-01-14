/**
 * Import modules which can be accessed
 */
import PeopleReducer from './PeopleReducer'
import WorkoutReducer from './WorkoutReducer'
import { combineReducers } from 'redux'

 /**
 * Combine and Export these modules to the rest of the application
 */
export default combineReducers({people: PeopleReducer, workout: WorkoutReducer })