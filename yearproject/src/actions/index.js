import AsyncStorage from "@react-native-community/async-storage";

export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: peopleId,
    };
};

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
};


export const formUpdate = ({ prop, value }) => {
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value },
    };
};

export const createNewContact = ({email, password}) => {

    return (dispatch) => {
 
        console.log(email)
        console.log(password)

        fetch('http://192.168.1.19:3000/api/user/register', {
            method: "POST",
 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({           
                "email": email,
                "password": password,
            })
        })
        .then((response) => console.log(response))
        .then(() => {
            dispatch({ type: 'NEW_CONTACT' });
        })
        .catch(error => console.log(error))
    };
};

export const loadInitialContacts = () => {
    return (dispatch) => {
        fetch('http://192.168.1.19:3000/contacts')
        .then((response) => {return response.json();})
        .then((data)=>{
            dispatch({type:'INITIAL_FETCH' , payload:data})
            
        })
        .catch((error) ,console.log(error))
    };
};


export const login = ({ email, password}) => {

    return (dispatch) => {
        let user = {
                        email: email,                    
                        password:password
                    }


        fetch('http://192.168.1.19:3000/api/user/login', {
            method: "POST",
            body: JSON.stringify({ "email": email,
            "password": password,
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
            
        })
        
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            AsyncStorage.setItem('token',data.token)
            dispatch({ type: 'USER_LOGGED_IN', payload: data });
        })
        .catch(error => console.log(error))
    };
};


export const loadInitialWorkouts = (token) => {
    return (dispatch) => {
        dispatch({type:'SET_LOADING' })
        fetch('http://192.168.1.19:3000/api/workouts', {
            
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "auth-token": token
            }
        })
        .then((response) => {return response.json();})
        .then((data)=>{
            dispatch({type:'INITIAL_FETCH_WORKOUTS' , payload:data})
            
        })
        .catch((error)=> {
            console.log('error load workouts!', error)
            return dispatch({ type: 'SET_ERROR', payload: 'Error: Could not connect to the server'})
        }
            )
    };
};




