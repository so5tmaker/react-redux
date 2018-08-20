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

function reducer(state, action) {
    console.log(state);
    console.log(action);
    return state;
};

const store = createStore(reducer, initialState);

const changeName = {
    type: 'CHANGE_NAME',
    payload: 'Ivan'
};

const changeSecondName = {
    type: 'CHANGE_SECOND_NAME',
    payload: 'Ivanov'
};

store.dispatch(changeName);