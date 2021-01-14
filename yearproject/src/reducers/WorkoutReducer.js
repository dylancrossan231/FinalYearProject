const initialState = {
    detailView: false,
    workouts: [],
    selectedWorkout: null,
    error: null,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: !state.loading
            }

        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case 'INITIAL_FETCH_WORKOUTS':
            return {
                ...state,
                workouts:action.payload,
                loading: false,
                error: null
            }
            default:
                return state;
        }

    }
