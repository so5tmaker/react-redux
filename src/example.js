// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from 'redux';

// initialState -> store
// view -> action -> reducer(state, action) -> newState
//  reducer() - pure function - the same parameters, 
// actions and returns (state) -- (dispatcher - flux)

const initialState = {
    name: 'Paul',
    secondName: 'Petrov'
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, name: action.payload }
        case 'CHANGE_SECOND_NAME':
            return { ...state, secondName: action.payload }
        default:
            return state
    }
};

const store = createStore(reducer, initialState);

console.log('subscribe', store.getState());

store.subscribe(() => {
    console.log('subscribe', store.getState());
})

const changeName = {
    type: 'CHANGE_NAME',
    payload: 'Ivan'
};

const changeSecondName = {
    type: 'CHANGE_SECOND_NAME',
    payload: 'Ivanov'
};

// • Actions: payloads of information that send data from your application to the store
// – Done through store.dispatch()
store.dispatch(changeName); 
//console.log(store.getState());
store.dispatch(changeSecondName);
//console.log(store.getState());