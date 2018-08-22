// Reducers
// • Reducers should be able to take the previous state and action and return next state:
// – Do not mutate state
// • Make a copy and modify the copy before returning it
// – Actions typically handled through a switch statement switching on the action type
// – Return the previous state in the default case

const initialState = {
    firstName: 'Dima',
    secondName: 'Shpak'
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION_CHANGE_FIRST_NAME':
            return { ...state, firstName: action.payload }
        case 'ACTION_CHANGE_SECOND_NAME':
            return { ...state, secondName: action.payload }
        default:
            return state
    }
};