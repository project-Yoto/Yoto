import { createStore } from 'redux';
import * as firebase from 'firebase';
import firestore from '../Config/firebase';
import React from 'react';

//Put in dummy data here
initialState  = {
    image: 'past in url',
    dummyName: 'blabla',
    count: 'waallah'
}


const reducer1 = (state = initialState, action) => {
    //Read initial 
    console.log('reducer running', state);
    return state;
}

function readData(state = initialState, action) {
    switch (action.type) {
      case READ_DATA:
        return Object.assign({}, state, {
          visibilityFilter: action.array
        })
      default:
        return state
    }
  }


// For simplicity test with one reduce, when we have multiple reducers we can combine them later. Test and make it work first
const store = createStore(reducer1);

export default store;