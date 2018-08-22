// • Actions: payloads of information that send data from your application to the store
//   – Done through store.dispatch()
// • Plain JS object that must have
//   – A type property that indicates the type of action to be performed
//      • Best supported by defining action types as String constants
//   – Rest of the object contains the data necessary for the action (payload)

import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from '../index';

// Action Creators 
// • Functions that create actions
// – Encapsulate the process of creating the action objects
// – Return the action object
// – Resulting action object can be passed to the store through dispatch()
// - You can see the passing of the resulting action object in the App.js file
export const changeFirstName = newFirstName => {
    return {
        type: ACTION_CHANGE_FIRST_NAME,
        payload: newFirstName
    };
};

export const changeSecondName = newSecondName => {
    return {
        type: ACTION_CHANGE_SECOND_NAME,
        payload: newSecondName
    };
};